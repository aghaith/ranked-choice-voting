import { Body, Controller, /* Logger, */ Post } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
  constructor(private pollsService: PollsService) {}

  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    const result = await this.pollsService.createPoll(createPollDto);
    // Logger.log('In create!');
    // return createPollDto;
    return result;
  }

  @Post('/join')
  async join(@Body() joinPollDto: JoinPollDto) {
    const result = await this.pollsService.joinPoll(joinPollDto);
    // Logger.log('In join!');
    // return joinPollDto;
    return result;
  }

  @Post('/rejoin')
  async rejoin() {
    const result = await this.pollsService.rejoinPoll({
      name: 'From token',
      pollID: 'Also from token',
      userID: 'Guess where this comes from?',
    });
    // Logger.log('In rejoin!');
    return result;
  }
}
