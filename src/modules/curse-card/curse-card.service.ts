import { Inject, Injectable } from '@nestjs/common';
import { CURSE_CARD_REPOSITORY } from 'src/core/constants';
import { CurseCardDTO } from './dto/curse-card.dto';
import { CurseCard } from './curse-card.entity';

@Injectable()
export class CurseCardService {
  constructor (
    @Inject(CURSE_CARD_REPOSITORY) private readonly curseCardRepository: typeof CurseCard,
  ) {}

  async create (curseCard: CurseCardDTO): Promise<CurseCard> {
    return await this.curseCardRepository.create(curseCard);
  }

  async findOneById (id: number): Promise<CurseCard> {
    return await this.curseCardRepository.findOne({
      where: {
        id,
      },
    });
  }
}
