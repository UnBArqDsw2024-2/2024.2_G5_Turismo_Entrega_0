import {Injectable} from "@nestjs/common";
import {Command} from "../../interface/Command";
import {UserAdapterMongo} from "../../adapter/UserAdapterMongo";

@Injectable()
export class CreateUserCommand implements Command {
    constructor(
        private readonly userService: UserAdapterMongo
    ) {}

    execute(data: any): void {
        //logic to create user
    }
}
