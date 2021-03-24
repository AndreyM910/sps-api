import { InputType, Int, Field } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { CreateUserInput } from '../../user/dto/create-user.input';

@InputType()
export class SignUpInput extends CreateUserInput {
  @Field({ nullable: false })
  @Min(8)
  password: string;
}
