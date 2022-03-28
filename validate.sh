#!/usr/bin/env bash

set -o errexit # Bail out on any error

directory=$(cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)

buildEnvironment="${1:-"dev"}"

yarnCommand="start:dev"

if [[ "${buildEnvironment}" == "dev" ]]; then
  yarnCommand="start:dev"
elif [[ "${buildEnvironment}" == "prod" ]]; then
  yarnCommand="start:prod"
else
  echo "Invalid build environment: ${buildEnvironment}"
  exit 1
fi

echo "Validating: ${buildEnvironment}"

dbHost="localhost"
# dbName="my-project"
# dbUser="postgres"
dbName="lightproject"
dbUser="lightproject_user"
dbPassword="somepassword"
dbPort=5432

docker run --rm -d -e "POSTGRES_DB=${dbName}" \
-e "POSTGRES_USER=${dbUser}" \
-e "POSTGRES_PASSWORD=${dbPassword}" \
-p "${dbPort}:${dbPort}" \
--name postgres-sample postgres:latest || echo "Postgres already exists!"

yarn install

cd "${directory}/packages/common"

yarn build

cd "${directory}/packages/app"

dbEndpoint="postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?schema=public&connect_timeout=300"

yarn prisma:generate && yarn build && DATABASE_URL="${dbEndpoint}" yarn prisma:migrate

if [[ "${buildEnvironment}" == "prod" ]]; then
  yarn workspaces focus "@my-project/app" --production
fi

DATABASE_URL="${dbEndpoint}" yarn "${yarnCommand}"
