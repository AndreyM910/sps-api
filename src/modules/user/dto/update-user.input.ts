import { InputType, Int, Field } from '@nestjs/graphql';
import { CoordinatesDto } from './coordinates.dto';
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

  @Field(() => CoordinatesDto, { nullable: true })
  coordinates?: CoordinatesDto;

  @Field({ nullable: true })
  address?: string;
}
