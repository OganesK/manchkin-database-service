"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treasureCardProvider = void 0;
const constants_1 = require("../../core/constants");
const treasure_card_entity_1 = require("./treasure-card.entity");
exports.treasureCardProvider = [
    {
        provide: constants_1.TREASURE_CARD_REPOSITORY,
        useValue: treasure_card_entity_1.TreasureCard,
    },
];
//# sourceMappingURL=treasure-card.provider.js.map