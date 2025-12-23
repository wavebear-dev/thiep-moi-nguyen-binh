import { PartialType } from '@nestjs/mapped-types';
import { CreateJoinEventDto } from './create-join-event.dto';

export class UpdateJoinEventDto extends PartialType(CreateJoinEventDto) {}
