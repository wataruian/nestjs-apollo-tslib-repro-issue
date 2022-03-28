import * as fs from 'fs';
import * as path from 'path';

const generatedDirectory = `${__dirname}/src/@generated`;

const rulesToAdd = [
  '// @ts-nocheck',
  '// eslint-disable-next-line @typescript-eslint/ban-ts-comment',
];

const files: string[] = [];

const getFilesRecursively = (directory: string) => {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);
    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute);
    } else {
      files.push(absolute);
    }
  }
};

try {
  if (fs.existsSync(generatedDirectory)) {
    getFilesRecursively(generatedDirectory);

    files.forEach((file) => {
      const extension = path.extname(file);

      if (extension === '.ts') {
        rulesToAdd.forEach((rule) => {
          const data = fs.readFileSync(file, { encoding: 'utf-8' });

          if (data.indexOf(rule) === -1) {
            const rows = data.toString().split('\n');

            rows.unshift(rule);

            fs.writeFileSync(file, rows.join('\n'));
          }
        });
      }
    });

    console.log(`Done adding rules for directory: ${generatedDirectory}`);
  } else {
    console.log(`Directory does not exists: ${generatedDirectory}`);
  }
} catch (err) {
  console.log(`Error adding rules for directory: ${generatedDirectory}`);
  throw err;
}
