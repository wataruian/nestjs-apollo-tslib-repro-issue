// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { registerEnumType } from '@nestjs/graphql';

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
