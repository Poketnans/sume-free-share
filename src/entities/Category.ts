import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export default class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 50 })
  name: string;
}
