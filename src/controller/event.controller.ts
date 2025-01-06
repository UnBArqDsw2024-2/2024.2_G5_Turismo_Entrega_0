import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateEventCommand} from "../command/event/CreateEventCommand";
import {EditEventCommand} from "../command/event/EditEventCommand";
import {RateEventCommand} from "../command/event/RateEventCommand";
import {FavoritedEventsCommand} from "../command/event/FavoritedEventsCommand";
import {CreateComentComand} from "../command/event/CreateComentComand";
import {CreateThemeComand} from "../command/event/CreateThemeComand";

@Controller('event')
export class FavoritedEventsController {
  constructor(
    private readonly createEventCommand: CreateEventCommand,
    private readonly editEventCommand: EditEventCommand,
    private readonly rateEventCommand: RateEventCommand,
    private readonly favoritedEventsCommand: FavoritedEventsCommand,
    private readonly createCommentCommand: CreateComentComand,
    private readonly createThemeComand: CreateThemeComand,
  ) {}

  @Post()
  async registerEvent(@Body() event: any) {
    await this.createEventCommand.execute(event);
  }

    @Post()
    async editEvent(@Body() event: any) {
      await this.editEventCommand.execute(event);
    }

    @Post()
    async rateEvent(@Body() event: any) {
      await this.rateEventCommand.execute(event);
    }

    @Post()
    async favoriteEvent(@Body() favoritedEvets: any) {
      await this.favoritedEventsCommand.execute(favoritedEvets);
    }

    @Post()
  async createComment(@Body() comment: any) {
    await this.createCommentCommand.execute(comment);
    }

    @Post()
  async createTheme(@Body() theme: any) {
    await this.createThemeComand.execute(theme);
    }

}
