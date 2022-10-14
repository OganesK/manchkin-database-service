import { TREASURE_CARD_REPOSITORY } from 'src/core/constants';
import { TreasureCard } from './treasure-card.entity';

export const treasureCardProvider = [
  {
    provide: TREASURE_CARD_REPOSITORY,
    useValue: TreasureCard,
  },
];
