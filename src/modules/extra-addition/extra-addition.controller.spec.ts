import { Test, TestingModule } from '@nestjs/testing';
import { ExtraAdditionController } from './extra-addition.controller';

describe('ExtraAdditionController', () => {
  let controller: ExtraAdditionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtraAdditionController],
    }).compile();

    controller = module.get<ExtraAdditionController>(ExtraAdditionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
