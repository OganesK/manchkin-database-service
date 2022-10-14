import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor (
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser (username: string, pass: string) {
    // find if user-email exists
    const user = await this.userService.findOneByEmail(username);

    if (!user) {
      return null;
    }

    // find user-password match
    const match = await this.comparePassword(pass, user.password);

    if (!match) {
      return null;
    }

    const { password, ...result } = user.dataValues;

    return result;
  }

  public async login (user) {
    return await this.generateToken(user);
  }

  public async create (user) {
    // hash password
    const hashPass = await this.hashPassword(user.password);

    const newUser = await this.userService.create({
      ...user,
      password: hashPass,
    });

    const { password, ...result } = newUser.dataValues;

    // get token
    const token = await this.generateToken(result);

    return { user: result, token };
  }

  private async generateToken (user) {
    return await this.jwtService.signAsync(user);
  }

  private async hashPassword (password) {
    return await bcrypt.hash(password, 10);
  }

  private async comparePassword (enteredPassword, dbPassword) {
    return await bcrypt.compare(enteredPassword, dbPassword);
  }
}
