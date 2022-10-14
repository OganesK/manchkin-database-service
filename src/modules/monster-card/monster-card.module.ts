import { Module } from '@nestjs/common';
import { MonsterCardController } from './monster-card.controller';
import { MonsterCardService } from './monster-card.service';
import { monsterCardProvider } from './monster-card.provider';

@Module({
  providers: [MonsterCardService, ...monsterCardProvider],
  exports: [MonsterCardService],
  controllers: [MonsterCardController],
})
export class MonsterCardModule {}
