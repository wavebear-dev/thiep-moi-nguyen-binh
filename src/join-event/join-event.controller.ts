import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateJoinEventDto } from './dto/create-join-event.dto';
import { JoinEventService } from './join-event.service';

@Controller('join-event')
export class JoinEventController {
  constructor(private readonly joinEventService: JoinEventService) {}

  @Post()
  create(@Body() createJoinEventDto: CreateJoinEventDto) {
    return this.joinEventService.create(createJoinEventDto);
  }

  @Get()
  findAll() {
    return this.joinEventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.joinEventService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.joinEventService.remove(+id);
  }
}
