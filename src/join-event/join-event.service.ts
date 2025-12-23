import { Injectable } from '@nestjs/common';
import { CreateJoinEventDto } from './dto/create-join-event.dto';
import { UpdateJoinEventDto } from './dto/update-join-event.dto';

@Injectable()
export class JoinEventService {
  create(createJoinEventDto: CreateJoinEventDto) {
    return 'This action adds a new joinEvent';
  }

  findAll() {
    return `This action returns all joinEvent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} joinEvent`;
  }

  update(id: number, updateJoinEventDto: UpdateJoinEventDto) {
    return `This action updates a #${id} joinEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} joinEvent`;
  }
}
