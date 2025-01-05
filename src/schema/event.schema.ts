import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Event extends Document {
  @Prop()
  name: string;

  @Prop()
  themeId: string;

  @Prop()
  userId: string;

  @Prop()
  adress: string;

  @Prop()
  location: string;

  @Prop()
  indicativeAge: number;

  @Prop()
  numberFavorited: number;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  createAt: Date;

  @Prop()
  entryValue: number;

  @Prop()
  description: string;

  @Prop({ type: Array, default: [] })
  commentsList: [];
}

export const EventSchema = SchemaFactory.createForClass(Event);
