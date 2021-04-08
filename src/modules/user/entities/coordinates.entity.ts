import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class Coordinates {
  @Field(() => Float, { nullable: false })
  latitude?: number;

  @Field(() => Float, { nullable: false })
  longitude?: number;
}
