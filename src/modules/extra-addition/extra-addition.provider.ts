import { EXTRA_ADDITION_REPOSITORY } from 'src/core/constants';
import { ExtraAddition } from './extra-addition.entity';

export const extraAdditionProvider = [
  {
    provide: EXTRA_ADDITION_REPOSITORY,
    useValue: ExtraAddition,
  },
];
