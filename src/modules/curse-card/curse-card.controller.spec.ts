import { Test, TestingModule } from '@nestjs/testing';
import { CurseCardController } from './curse-card.controller';

describe('CurseCardController', () => {
  let controller: CurseCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurseCardController],
    }).compile();

    controller = module.get<CurseCardController>(CurseCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
