import {Injectable} from "@nestjs/common";
import {Command} from "../../interface/Command";
import {EventAdapterMongo} from "../../adapter/EventAdapterMongo";

@Injectable()
export class EditEventCommand implements Command {
    constructor(
        private readonly eventService: EventAdapterMongo
    ) {}

    execute(data: any): void {
        //logic to create user
    }
}