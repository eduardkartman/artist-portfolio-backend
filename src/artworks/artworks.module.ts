import { Module } from '@nestjs/common';
import { ArtworksService } from './artworks.service';
import { ArtworksController } from './artworks.controller';

@Module({
  providers: [ArtworksService],
  controllers: [ArtworksController],
})
export class ArtworksModule {}
