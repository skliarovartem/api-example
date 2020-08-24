import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('profiles')
export class ProfilesController {

  @UseGuards(JwtAuthGuard)
  @Get()
  findOne(@Request() req) {
    return req.user.profile;
  }
}