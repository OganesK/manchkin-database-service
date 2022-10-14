"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extraAdditionProvider = void 0;
const constants_1 = require("../../core/constants");
const extra_addition_entity_1 = require("./extra-addition.entity");
exports.extraAdditionProvider = [
    {
        provide: constants_1.EXTRA_ADDITION_REPOSITORY,
        useValue: extra_addition_entity_1.ExtraAddition,
    },
];
//# sourceMappingURL=extra-addition.provider.js.map