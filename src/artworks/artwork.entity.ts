import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Artwork {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;
}
