"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../../modules/users/user.entity");
const treasure_card_entity_1 = require("../../modules/treasure-card/treasure-card.entity");
const monster_card_entity_1 = require("../../modules/monster-card/monster-card.entity");
const curse_card_entity_1 = require("../../modules/curse-card/curse-card.entity");
const extra_addition_entity_1 = require("../../modules/extra-addition/extra-addition.entity");
const constants_1 = require("../constants");
const database_config_1 = require("./database.config");
exports.databaseProviders = [
    {
        provide: constants_1.SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case constants_1.DEVELOPMENT:
                    config = database_config_1.databaseConfig.development;
                    break;
                case constants_1.TEST:
                    config = database_config_1.databaseConfig.test;
                    break;
                case constants_1.PRODUCTION:
                    config = database_config_1.databaseConfig.production;
                    break;
                default:
                    config = database_config_1.databaseConfig.development;
            }
            const sequelize = new sequelize_typescript_1.Sequelize(config);
            sequelize.addModels([user_entity_1.User, treasure_card_entity_1.TreasureCard, monster_card_entity_1.MonsterCard, curse_card_entity_1.CurseCard, extra_addition_entity_1.ExtraAddition]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map