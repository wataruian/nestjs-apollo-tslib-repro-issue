// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  firstName = 'firstName',
  middleName = 'middleName',
  lastName = 'lastName',
}

registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
