import { Sequelize } from 'sequelize-typescript';

import { User } from 'src/modules/users/user.entity';
import { TreasureCard } from 'src/modules/treasure-card/treasure-card.entity';
import { MonsterCard } from 'src/modules/monster-card/monster-card.entity';
import { CurseCard } from 'src/modules/curse-card/curse-card.entity';
import { ExtraAddition } from 'src/modules/extra-addition/extra-addition.entity';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;

      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);

      sequelize.addModels([User, TreasureCard, MonsterCard, CurseCard, ExtraAddition]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
