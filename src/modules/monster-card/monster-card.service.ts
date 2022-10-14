import { Injectable, Inject } from '@nestjs/common';
import { MONSTER_CARD_REPOSITORY } from 'src/core/constants';
import { MonsterCard } from './monster-card.entity';
import { MonsterCardDTO } from './dto/monster-card.dto';

@Injectable()
export class MonsterCardService {
  constructor (
    @Inject(MONSTER_CARD_REPOSITORY) private readonly monsterCardRepository: typeof MonsterCard,
  ) {}

  async create (monsterCard: MonsterCardDTO): Promise<MonsterCard> {
    return await this.monsterCardRepository.create(monsterCard);
  }

  async findOneById (id: number): Promise<MonsterCard> {
    return await this.monsterCardRepository.findOne({
      where: {
        id,
      },
    });
  }
}
