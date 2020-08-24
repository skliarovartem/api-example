import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User)
              private repo: Repository<User>) {
  }

  create(user: User): Promise<User> {
    return this.repo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repo.find();
  }

  findById(id: string): Promise<User> {
    return this.repo.findOne(id);
  }

  async getByEmail(email: string): Promise<User> {
    return await this.repo.findOne({
      where: {
        email,
      },
    });
  }
}
