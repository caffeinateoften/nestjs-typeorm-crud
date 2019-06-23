import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PollService } from './poll.service';
import { PollController } from './poll.controller';
import { Poll } from './poll.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poll])],
  providers: [PollService],
  controllers: [PollController],
})
export class PollModule {}