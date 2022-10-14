"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureCardModule = void 0;
const common_1 = require("@nestjs/common");
const treasure_card_service_1 = require("./treasure-card.service");
const treasure_card_provider_1 = require("./treasure-card.provider");
const treasure_card_controller_1 = require("./treasure-card.controller");
let TreasureCardModule = class TreasureCardModule {
};
TreasureCardModule = __decorate([
    (0, common_1.Module)({
        providers: [treasure_card_service_1.TreasureCardService, ...treasure_card_provider_1.treasureCardProvider],
        exports: [treasure_card_service_1.TreasureCardService],
        controllers: [treasure_card_controller_1.TreasureCardController],
    })
], TreasureCardModule);
exports.TreasureCardModule = TreasureCardModule;
//# sourceMappingURL=treasure-card.module.js.map