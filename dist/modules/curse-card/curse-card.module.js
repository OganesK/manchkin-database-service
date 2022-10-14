"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurseCardModule = void 0;
const common_1 = require("@nestjs/common");
const curse_card_controller_1 = require("./curse-card.controller");
const curse_card_service_1 = require("./curse-card.service");
const curse_card_provider_1 = require("./curse-card.provider");
let CurseCardModule = class CurseCardModule {
};
CurseCardModule = __decorate([
    (0, common_1.Module)({
        providers: [curse_card_service_1.CurseCardService, ...curse_card_provider_1.curseCardProvider],
        exports: [curse_card_service_1.CurseCardService],
        controllers: [curse_card_controller_1.CurseCardController],
    })
], CurseCardModule);
exports.CurseCardModule = CurseCardModule;
//# sourceMappingURL=curse-card.module.js.map