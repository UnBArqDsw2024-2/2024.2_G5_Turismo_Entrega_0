import { Body, Controller, Post } from '@nestjs/common';
import { FavoritedEventAdapterMongo } from '../adapter/FavoritedEventAdapterMongo';

@Controller('comment')
export class FavoritedEventsController {
  constructor(private readonly commentService: FavoritedEventAdapterMongo) {}

  @Post()
  async create(@Body() comment: any) {
    await this.commentService.create(comment);
  }
}
