import { Controller, Body, Post, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MonsterCardDTO } from './dto/monster-card.dto';
import { MonsterCardService } from './monster-card.service';

@Controller('monster-card')
export class MonsterCardController {
  constructor (private monsterCardService: MonsterCardService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createMonsterCard (@Body() monsterCardData: MonsterCardDTO) {
    return await this.monsterCardService.create(monsterCardData);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getMonsterCardById (@Param('id') id: number) {
    return await this.monsterCardService.findOneById(id);
  }
}
