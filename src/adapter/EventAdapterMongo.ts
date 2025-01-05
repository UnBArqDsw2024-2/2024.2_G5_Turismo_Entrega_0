import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from '../schema/event.schema';
import { EventAdapterDataBaseInterface } from '../interface/EventAdapterDataBaseInterface';

@Injectable()
export class EventAdapterMongo implements EventAdapterDataBaseInterface {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<Event>,
  ) {}

  async create(event: any): Promise<Event> {
    const createdEvent = new this.eventModel(event);
    return createdEvent.save();
  }
}
