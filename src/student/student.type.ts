import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;
}
