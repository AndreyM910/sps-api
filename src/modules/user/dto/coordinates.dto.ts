import { InputType, Float, Field } from '@nestjs/graphql';

@InputType()
export class CoordinatesDto {
  @Field(() => Float, { nullable: false })
  latitude: number;

  @Field(() => Float, { nullable: false })
  longitude?: number;
}
