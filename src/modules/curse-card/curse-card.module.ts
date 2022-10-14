import { Module } from '@nestjs/common';
import { CurseCardController } from './curse-card.controller';
import { CurseCardService } from './curse-card.service';
import { curseCardProvider } from './curse-card.provider';

@Module({
  providers: [CurseCardService, ...curseCardProvider],
  exports: [CurseCardService],
  controllers: [CurseCardController],
})
export class CurseCardModule {}
