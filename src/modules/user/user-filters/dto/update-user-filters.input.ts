import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, Max, Min } from 'class-validator';

@InputType()
export class UpdateUserFiltersInput {
  @IsNumber()
  @Min(1)
  @Max(100)
  @Field(() => Int, { nullable: true })
  radius?: number;
}
