import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('artwork')
export class Artwork {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image_url: string;

  @Column()
  linktosite: string;

  @Column()
  status: boolean;
}
