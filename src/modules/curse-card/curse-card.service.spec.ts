import { Test, TestingModule } from '@nestjs/testing';
import { CurseCardService } from './curse-card.service';

describe('CurseCardService', () => {
  let service: CurseCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurseCardService],
    }).compile();

    service = module.get<CurseCardService>(CurseCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
