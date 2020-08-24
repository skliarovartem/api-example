import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {
  }

  @Post()
  async create(@Body() user: User) {

    const createdUser = await this.usersService.create(user);
    return { 'id': createdUser.id };
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

}
