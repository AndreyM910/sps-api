import { ObjectType, Field } from '@nestjs/graphql';
import { Types } from 'mongoose';

@ObjectType()
export class UserFilters {
  @Field({ nullable: false })
  _id: Types.ObjectId;

  @Field({ nullable: false })
  radius: number;
}
