import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Types } from 'mongoose';

@ObjectType()
export class User {
  @Field({ nullable: false })
  _id: Types.ObjectId;

  @Field({ nullable: false })
  authToken: string;

  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: false })
  email: string;

  @Field(() => [Float], { nullable: true })
  coordinates?: number[];

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: false })
  userFiltersId: Types.ObjectId;
}
