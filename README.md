## Issue

Can't start nestjs application with Production build - Yarn PnP + Workspaces and `@nestjs/apollo`

## Details of the issue

1. Cannot start app when using `start:prod`.
2. Can start app without problems using `start:dev` and omitting `--production` from `yarn workspaces focus`

## To reproduce/debug the issue:

- Execute the commands to start/debug environments:

1. For dev: `./validate.sh dev`
2. For prod: `./validate.sh prod`
