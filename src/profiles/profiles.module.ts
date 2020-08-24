import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';

@Module({
  imports: [],
  controllers: [ProfilesController],
  providers: [],
})
export class ProfilesModule {
}