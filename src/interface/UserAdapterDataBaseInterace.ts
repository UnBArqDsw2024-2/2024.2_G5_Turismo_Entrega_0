import { CreateUserDto } from '../dto/create-user.dto';

export interface UserAdapterDataBaseInterace {
  create(data: CreateUserDto): void;
}
