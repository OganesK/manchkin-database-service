import { Injectable, Inject } from '@nestjs/common';
import { TREASURE_CARD_REPOSITORY } from 'src/core/constants';
import { ExtraAddition } from '../extra-addition/extra-addition.entity';
import { TreasureCard } from './treasure-card.entity';
import { TreasureCardDTO } from './dto/treasure-card.dto';

@Injectable()
export class TreasureCardService {
  constructor (
    @Inject(TREASURE_CARD_REPOSITORY) private readonly treasureCardRepository: typeof TreasureCard,
  ) {}

  async create (treasureCard: TreasureCardDTO): Promise<TreasureCard> {
    return await this.treasureCardRepository.create<TreasureCard>(treasureCard);
  }

  async findOneById (id: number): Promise<TreasureCard> {
    return await this.treasureCardRepository.findOne({
      where: {
        id,
      },
      include: [
        {
          model: ExtraAddition,
        },
      ],
    });
  }
}
