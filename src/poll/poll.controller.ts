import { Controller, Get } from '@nestjs/common';

@Controller('polls')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all polls';
  }
}