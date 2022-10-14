import { Controller, Body, Post, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TreasureCardDTO } from './dto/treasure-card.dto';
import { TreasureCardService } from './treasure-card.service';

@Controller('treasure-card')
export class TreasureCardController {
  constructor (private treasureCardService: TreasureCardService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createTreasureCard (@Body() treasureCardData: TreasureCardDTO) {
    return await this.treasureCardService.create(treasureCardData);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getTreasureCardById (@Param('id') id: number) {
    return await this.treasureCardService.findOneById(id);
  }
}
