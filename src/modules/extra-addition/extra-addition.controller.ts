import { Controller, Body, Post, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExtraAdditionDTO } from './dto/extra-addition.dto';
import { ExtraAdditionService } from './extra-addition.service';

@Controller('extra-addition')
export class ExtraAdditionController {
  constructor (private extraAdditionService: ExtraAdditionService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createExtraAddition (@Body() extraAdditionData: ExtraAdditionDTO) {
    console.log(extraAdditionData);
    return await this.extraAdditionService.create(extraAdditionData);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getExtraAdditionById (@Param('id') id: number) {
    return await this.extraAdditionService.findOneById(id);
  }
}
