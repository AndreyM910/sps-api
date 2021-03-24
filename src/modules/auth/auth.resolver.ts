import { Args, Mutation, Resolver } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { SignUpInput } from './dto/sing-up.input';
import { UserService } from '../user/user.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async signUp(@Args('signUpInput') signUpInput: SignUpInput) {
    const {password, ...user} = signUpInput;
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return this.userService.create({...user, password: hash});
  }
}
