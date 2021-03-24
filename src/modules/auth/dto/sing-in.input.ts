import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, Min } from 'class-validator';

@InputType()
export class SignInInput {
  @Field({ nullable: false })
  @Min(8)
  password: string;

  @Field({ nullable: false })
  @IsEmail()
  email: string;
}
