import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CommentAdapterDataBaseInterface } from '../interface/CommentAdapterDataBaseInterface';
import { Comment } from '../schema/comment.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentAdapterMongo implements CommentAdapterDataBaseInterface {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
  ) {}

  async create(comment: any): Promise<Comment> {
    const createComment = new this.commentModel(comment);
    return createComment.save();
  }
}
