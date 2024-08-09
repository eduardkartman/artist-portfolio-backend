import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ArtworksService } from './artworks.service';
import { Artwork } from './artwork.entity';

@Controller('artworks')
export class ArtworksController {
  constructor(private readonly artworksService: ArtworksService) {}

  @Get()
  findAll(): Promise<Artwork[]> {
    return this.artworksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Artwork> {
    return this.artworksService.findOne(+id);
  }

  @Post()
  create(@Body() artwork: Artwork): Promise<Artwork> {
    return this.artworksService.create(artwork);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() artwork: Artwork): Promise<Artwork> {
    return this.artworksService.update(+id, artwork);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.artworksService.remove(+id);
  }
}
