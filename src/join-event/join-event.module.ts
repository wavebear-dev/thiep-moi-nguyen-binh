import { Module } from '@nestjs/common';
import { JoinEventService } from './join-event.service';
import { JoinEventController } from './join-event.controller';

@Module({
  controllers: [JoinEventController],
  providers: [JoinEventService],
})
export class JoinEventModule {}
