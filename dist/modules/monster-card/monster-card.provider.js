"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monsterCardProvider = void 0;
const constants_1 = require("../../core/constants");
const monster_card_entity_1 = require("./monster-card.entity");
exports.monsterCardProvider = [
    {
        provide: constants_1.MONSTER_CARD_REPOSITORY,
        useValue: monster_card_entity_1.MonsterCard,
    },
];
//# sourceMappingURL=monster-card.provider.js.map