import { Body, Controller, Post } from '@nestjs/common';
import { FavoritedEventAdapterMongo } from '../adapter/FavoritedEventAdapterMongo';

@Controller('favoritedEvets')
export class FavoritedEventsController {
  constructor(
    private readonly favoritedEventsService: FavoritedEventAdapterMongo,
  ) {}

  @Post()
  async create(@Body() favoritedEvets: any) {
    await this.favoritedEventsService.create(favoritedEvets);
  }
}
