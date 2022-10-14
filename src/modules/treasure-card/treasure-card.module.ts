import { Module } from '@nestjs/common';
import { TreasureCardService } from './treasure-card.service';
import { treasureCardProvider } from './treasure-card.provider';
import { TreasureCardController } from './treasure-card.controller';

@Module({
  providers: [TreasureCardService, ...treasureCardProvider],
  exports: [TreasureCardService],
  controllers: [TreasureCardController],
})
export class TreasureCardModule {}
