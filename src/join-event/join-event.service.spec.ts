import { Test, TestingModule } from '@nestjs/testing';
import { JoinEventService } from './join-event.service';

describe('JoinEventService', () => {
  let service: JoinEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinEventService],
    }).compile();

    service = module.get<JoinEventService>(JoinEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
