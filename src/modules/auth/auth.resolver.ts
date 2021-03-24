import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../user/entities/user.entity';
import { SignUpInput } from './dto/sing-up.input';
import { UserService } from '../user/user.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.userService.create(signUpInput);
  }
}
