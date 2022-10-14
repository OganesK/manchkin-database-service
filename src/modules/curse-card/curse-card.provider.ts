import { CURSE_CARD_REPOSITORY } from 'src/core/constants';
import { CurseCard } from './curse-card.entity';

export const curseCardProvider = [
  {
    provide: CURSE_CARD_REPOSITORY,
    useValue: CurseCard,
  },
];
