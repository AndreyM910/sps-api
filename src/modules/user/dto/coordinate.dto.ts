import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CoordinateDto {
  @Field(() => Int, { nullable: false })
  latitude: number;

  @Field(() => Int, { nullable: false })
  longitude?: number;
}
