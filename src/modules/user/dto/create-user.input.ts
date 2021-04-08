import { InputType, Int, Field } from '@nestjs/graphql';
import { CoordinatesDto } from './coordinates.dto';
import { IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: false })
  @IsEmail()
  email: string;

  @Field(() => CoordinatesDto, { nullable: true })
  coordinate?: CoordinatesDto;

  @Field({ nullable: true })
  address?: string;
}
