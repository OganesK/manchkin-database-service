"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curseCardProvider = void 0;
const constants_1 = require("../../core/constants");
const curse_card_entity_1 = require("./curse-card.entity");
exports.curseCardProvider = [
    {
        provide: constants_1.CURSE_CARD_REPOSITORY,
        useValue: curse_card_entity_1.CurseCard,
    },
];
//# sourceMappingURL=curse-card.provider.js.map