import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
@Schema()
export class FavoritedEvents extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Event' })
  eventId: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    default: [],
  })
  user: User[];

  @Prop({ default: 0 })
  counter: number;
}

export const FavoritedEventsSchema =
  SchemaFactory.createForClass(FavoritedEvents);
