/* eslint-disable import/no-cycle */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinColumn,
} from 'typeorm';
import User from './User';
import Category from './Category';

@Entity('projects')
export default class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ length: 180 })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  starts_at: Date;

  @Column()
  ends_at: Date;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'id_user_owner', referencedColumnName: 'id' })
  user_owner: User;

  @ManyToMany(() => User, (user) => user.projects_participated_in)
  contributors: User[];

  @ManyToOne(() => Category, { nullable: false })
  @JoinColumn({ name: 'id_category', referencedColumnName: 'id' })
  category: Category;
}
