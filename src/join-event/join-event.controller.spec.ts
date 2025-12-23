import { Test, TestingModule } from '@nestjs/testing';
import { JoinEventController } from './join-event.controller';
import { JoinEventService } from './join-event.service';

describe('JoinEventController', () => {
  let controller: JoinEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JoinEventController],
      providers: [JoinEventService],
    }).compile();

    controller = module.get<JoinEventController>(JoinEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
