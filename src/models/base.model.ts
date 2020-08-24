import { CreateDateColumn, DeleteDateColumn, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

export class BaseModel {

  @ObjectIdColumn()
  id: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ nullable: false })
  upadtedAt: Date;

  @DeleteDateColumn({ nullable: false })
  deletedAt: Date;
}