import { Body, Controller, Post } from '@nestjs/common';
import { ThemeAdapterMongo } from '../adapter/ThemeAdapterMongo';

@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeAdapterMongo) {}

  @Post()
  async create(@Body() theme: any) {
    await this.themeService.create(theme);
  }
}
