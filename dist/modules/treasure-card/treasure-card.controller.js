"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureCardController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const treasure_card_dto_1 = require("./dto/treasure-card.dto");
const treasure_card_service_1 = require("./treasure-card.service");
let TreasureCardController = class TreasureCardController {
    constructor(treasureCardService) {
        this.treasureCardService = treasureCardService;
    }
    async createTreasureCard(treasureCardData) {
        return await this.treasureCardService.create(treasureCardData);
    }
    async getTreasureCardById(id) {
        return await this.treasureCardService.findOneById(id);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [treasure_card_dto_1.TreasureCardDTO]),
    __metadata("design:returntype", Promise)
], TreasureCardController.prototype, "createTreasureCard", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TreasureCardController.prototype, "getTreasureCardById", null);
TreasureCardController = __decorate([
    (0, common_1.Controller)('treasure-card'),
    __metadata("design:paramtypes", [treasure_card_service_1.TreasureCardService])
], TreasureCardController);
exports.TreasureCardController = TreasureCardController;
//# sourceMappingURL=treasure-card.controller.js.map