import { Test, TestingModule } from '@nestjs/testing';
import { TreasureCardService } from './treasure-card.service';

describe('TreasureCardService', () => {
  let service: TreasureCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreasureCardService],
    }).compile();

    service = module.get<TreasureCardService>(TreasureCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
