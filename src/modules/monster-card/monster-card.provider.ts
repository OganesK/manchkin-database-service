import { MONSTER_CARD_REPOSITORY } from 'src/core/constants';
import { MonsterCard } from './monster-card.entity';

export const monsterCardProvider = [
  {
    provide: MONSTER_CARD_REPOSITORY,
    useValue: MonsterCard,
  },
];
