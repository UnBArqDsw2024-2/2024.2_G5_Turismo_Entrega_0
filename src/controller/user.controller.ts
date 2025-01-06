import {Body, Controller, Get, Post} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserAdapterMongo } from '../adapter/UserAdapterMongo';
import {AuthenticateUserCommand} from "../command/user/AuthenticateUserCommand";
import {CreateUserCommand} from "../command/user/CreateUserCommand";

@Controller('user')
export class UserController {
  constructor(private readonly authenticateUserCommand: AuthenticateUserCommand,
              private readonly createUserCommand : CreateUserCommand) {}

  @Post()
  async register(@Body() createUserDto: CreateUserDto) {
    await this.createUserCommand.execute(createUserDto);
  }

  @Post()
  async login(email:string, password:string) {
    await this.authenticateUserCommand.execute({email, password});
  }
}
