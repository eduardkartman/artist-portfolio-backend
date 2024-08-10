import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtworksModule } from './artworks/artworks.module';
import { Artwork } from './artworks/artwork.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'eduar',
      password: 'edi123',
      database: 'ArtworkDB',
      entities: [Artwork],
      synchronize: true,
    }),
    ArtworksModule,
  ],
})
export class AppModule {}
