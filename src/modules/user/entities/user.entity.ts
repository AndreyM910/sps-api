import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Coordinate } from './coordinate.entity';
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

  @Field(() => Coordinate, { nullable: false })
  coordinate: Coordinate;
}
