import { InputType, Int, Field } from '@nestjs/graphql';
import { CoordinateDto } from './coordinate.dto';
import { IsEmail } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;

  @Field(() => CoordinateDto, { nullable: true })
  coordinate?: CoordinateDto;
}
