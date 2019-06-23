import { Controller, Get } from '@nestjs/common';

@Controller('polls')
export class PollsController {
  @Get()
  findAll(): string {
    return 'This action returns all polls';
  }
}