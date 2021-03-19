import { InputType, Int, Field } from '@nestjs/graphql';
import { CoordinateDto } from './coordinate.dto';

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: false })
  email: string;

  @Field(() => CoordinateDto, { nullable: false })
  coordinate: CoordinateDto;
}
