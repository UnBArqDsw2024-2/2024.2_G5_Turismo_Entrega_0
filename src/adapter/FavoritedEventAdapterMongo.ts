import { Injectable } from '@nestjs/common';
import { FavoritedEvents } from '../schema/favoritedEvents.schema';
import { FavoritedEventAdapterDataBaseInterface } from '../interface/FavoritedEventAdapterDataBaseInterface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FavoritedEventAdapterMongo
  implements FavoritedEventAdapterDataBaseInterface
{
  constructor(
    @InjectModel(FavoritedEvents.name)
    private readonly favoritedEventsModel: Model<FavoritedEvents>,
  ) {}

  async create(favoritedEvents: any): Promise<FavoritedEvents> {
    const createdFavoritedEvents = new this.favoritedEventsModel(
      favoritedEvents,
    );
    return createdFavoritedEvents.save();
  }
}
