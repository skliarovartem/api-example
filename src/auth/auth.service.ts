import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.model';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService,
              private jwtService: JwtService) {
  }

  async login(user: User) {

    const payload = { id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, pass: string): Promise<any> {

    const user = await this.usersService.getByEmail(email);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
