import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../user/entities/user.entity';
import { SignUpInput } from './dto/sing-up.input';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/sing-in.input';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => User)
  async signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authService.signUp(signUpInput);
  }

  @Mutation(() => User)
  async signIn(@Args('signInInput') signInInput: SignInInput) {
    return this.authService.signIn(signInInput);
  }
}
