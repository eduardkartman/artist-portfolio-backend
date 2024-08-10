import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtworksService } from './artworks.service';
import { ArtworksController } from './artworks.controller';
import { Artwork } from './artwork.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artwork])],
  providers: [ArtworksService],
  controllers: [ArtworksController],
})
export class ArtworksModule {}
