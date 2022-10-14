import { Test, TestingModule } from '@nestjs/testing';
import { MonsterCardController } from './monster-card.controller';

describe('MonsterCardController', () => {
  let controller: MonsterCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonsterCardController],
    }).compile();

    controller = module.get<MonsterCardController>(MonsterCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
