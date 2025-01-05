import { Module } from '@nestjs/common';
import { UserAdapterMongo } from '../service/user-adapter-mongo.service';
import { UserController } from '../controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserAdapterMongo],
})
export class UserModule {}
