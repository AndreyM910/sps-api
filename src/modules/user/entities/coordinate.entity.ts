import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Coordinate {
  @Field(() => Int, { nullable: false })
  latitude: number;

  @Field(() => Int, { nullable: false })
  longitude?: number;
}
