// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserAvgAggregate {
  @Field(() => Float, { nullable: true })
  id?: number;
}
