// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { registerEnumType } from '@nestjs/graphql';

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
