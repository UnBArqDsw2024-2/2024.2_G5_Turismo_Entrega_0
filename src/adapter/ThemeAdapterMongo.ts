import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ThemeAdapterDataBaseInterface } from '../interface/ThemeAdapterDataBaseInterface';
import { Theme } from '../schema/theme.schema';
import { Model } from 'mongoose';

@Injectable()
export class ThemeAdapterMongo implements ThemeAdapterDataBaseInterface {
  constructor(
    @InjectModel(Theme.name) private readonly themeModel: Model<Theme>,
  ) {}

  async create(theme: any): Promise<Theme> {
    const createTheme = new this.themeModel(theme);
    return createTheme.save();
  }
}
