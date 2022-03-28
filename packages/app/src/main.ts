import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { hello } from '@my-project/common';

hello.sendMessage('This is a message from server using the common library!');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
