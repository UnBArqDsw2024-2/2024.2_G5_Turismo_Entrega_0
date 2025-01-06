import {Injectable} from "@nestjs/common";
import {Command} from "../../interface/Command";
import {UserAdapterMongo} from "../../adapter/UserAdapterMongo";

@Injectable()
export class AuthenticateUserCommand implements Command {
    constructor(
        private readonly userService: UserAdapterMongo
    ) {}

    execute(data: any): void {
        //logic to authenticate user
    }
}
