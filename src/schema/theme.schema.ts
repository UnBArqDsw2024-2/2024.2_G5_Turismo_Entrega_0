import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Theme extends Document {
  @Prop()
  name: string;

  @Prop()
  images: string;

  @Prop()
  description: string;

  @Prop()
  popularSongs: string;
}

export const ThemeSchema = SchemaFactory.createForClass(Theme);
