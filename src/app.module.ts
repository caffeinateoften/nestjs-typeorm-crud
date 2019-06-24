import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PollModule } from './poll/poll.module'
const config = require('./typeorm.config')

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    PollModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
