import { Column, OneToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { User } from '../users/user.model';

export class Profile {

  @IsNotEmpty()
  @Column()
  firstName: string;

  @IsNotEmpty()
  @Column()
  lastName: string;

  @OneToOne(type => User)
  user: User;
}