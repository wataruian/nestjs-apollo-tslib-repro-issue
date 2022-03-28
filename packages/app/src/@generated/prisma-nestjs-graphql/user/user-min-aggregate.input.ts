// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  firstName?: true;

  @Field(() => Boolean, { nullable: true })
  middleName?: true;

  @Field(() => Boolean, { nullable: true })
  lastName?: true;
}
