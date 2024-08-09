import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artwork } from './artwork.entity';

@Injectable()
export class ArtworksService {
  constructor(
    @InjectRepository(Artwork)
    private artworksRepository: Repository<Artwork>,
  ) {}

  findAll(): Promise<Artwork[]> {
    return this.artworksRepository.find();
  }

  findOne(id: number): Promise<Artwork> {
    return this.artworksRepository.findOneBy({ id });
  }

  create(artwork: Artwork): Promise<Artwork> {
    return this.artworksRepository.save(artwork);
  }

  async update(id: number, artwork: Artwork): Promise<Artwork> {
    await this.artworksRepository.update(id, artwork);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.artworksRepository.delete(id);
  }
}
