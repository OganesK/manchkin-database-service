import { Module } from '@nestjs/common';
import { ExtraAdditionController } from './extra-addition.controller';
import { ExtraAdditionService } from './extra-addition.service';
import { extraAdditionProvider } from './extra-addition.provider';

@Module({
  providers: [ExtraAdditionService, ...extraAdditionProvider],
  exports: [ExtraAdditionService],
  controllers: [ExtraAdditionController],
})
export class ExtraAdditionModule {}
