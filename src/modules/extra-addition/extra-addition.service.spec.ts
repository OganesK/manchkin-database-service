import { Test, TestingModule } from '@nestjs/testing';
import { ExtraAdditionService } from './extra-addition.service';

describe('ExtraAdditionService', () => {
  let service: ExtraAdditionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtraAdditionService],
    }).compile();

    service = module.get<ExtraAdditionService>(ExtraAdditionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
