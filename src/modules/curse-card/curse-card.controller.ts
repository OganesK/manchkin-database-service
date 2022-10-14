import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CurseCardDTO } from './dto/curse-card.dto';
import { CurseCardService } from './curse-card.service';

@Controller('curse-card')
export class CurseCardController {
  constructor (private curseCardService: CurseCardService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createCurseCard (@Body() curseCardData: CurseCardDTO) {
    return await this.curseCardService.create(curseCardData);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getCurseCardById (@Param('id') id: number) {
    return await this.curseCardService.findOneById(id);
  }
}
