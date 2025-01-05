import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comment extends Document {
  @Prop()
  userId: string;

  @Prop()
  eventId: string;

  @Prop()
  content: string;

  @Prop()
  createAt: Date;

  @Prop()
  eventRate: number;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
