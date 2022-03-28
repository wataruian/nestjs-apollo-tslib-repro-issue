// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String, { nullable: false })
  lastName!: string;
}
