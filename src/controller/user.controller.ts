import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserAdapterMongo } from '../adapter/UserAdapterMongo';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserAdapterMongo) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
  }
}
