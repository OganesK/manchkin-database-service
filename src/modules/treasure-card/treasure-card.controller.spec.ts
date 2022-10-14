import { Test, TestingModule } from '@nestjs/testing';
import { TreasureCardController } from './treasure-card.controller';

describe('TreasureCardController', () => {
  let controller: TreasureCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreasureCardController],
    }).compile();

    controller = module.get<TreasureCardController>(TreasureCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
