import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Coordinate } from './coordinate.entity';

@ObjectType()
export class User {
  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: false })
  email: string;

  @Field(() => Coordinate, { nullable: false })
  coordinate: Coordinate;
}
