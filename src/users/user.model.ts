import { BaseModel } from '../models/base.model';
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Profile } from '../profiles/profile.model';

@Entity('users')
export class User extends BaseModel {

  @IsEmail()
  @Column()
  email: string;

  @IsNotEmpty()
  @Column()
  password: string;

  @IsNotEmpty()
  @Column(type => Profile)
  profile: Profile;

  @BeforeInsert()
  @BeforeUpdate()
  async hashFunction() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}