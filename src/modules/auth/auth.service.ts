import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { SignUpInput } from './dto/sing-up.input';
import { SignInInput } from './dto/sing-in.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signUp(input: SignUpInput) {
    const {password, ...user} = input;
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const currentUser = await this.userService.create({...user, password: hash});
    return this.userService.updateById(currentUser._id, {authToken: this.jwtService.sign({userId: currentUser._id, email: currentUser.email})});
  }

  async signIn(input: SignInInput) {
    const {password, email} = input;
    const user = await this.userService.findOne({email});
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return this.userService.updateById(user._id, {authToken: this.jwtService.sign({userId: user._id, email: user.email})});
    } else {
      throw new UnauthorizedException('Incorrect password');
    }
  }
}
