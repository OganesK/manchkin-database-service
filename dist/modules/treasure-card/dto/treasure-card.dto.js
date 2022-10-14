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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureCardDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
var SLOT;
(function (SLOT) {
    SLOT["ONE_HAND"] = "one_hand";
    SLOT["TWO_HAND"] = "two_hand";
    SLOT["HEAD"] = "head";
    SLOT["FEET"] = "feet";
    SLOT["BODY"] = "body";
    SLOT["FREE"] = "free";
    SLOT["DECK"] = "deck";
})(SLOT || (SLOT = {}));
class TreasureCardDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TreasureCardDTO.prototype, "forWho", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TreasureCardDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TreasureCardDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TreasureCardDTO.prototype, "cost", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TreasureCardDTO.prototype, "bonus", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], TreasureCardDTO.prototype, "isBig", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(SLOT, {
        message: 'Slot can be only ONE_HAND TWO_HAND HEAD FEET BODY FREE DECK',
    }),
    __metadata("design:type", String)
], TreasureCardDTO.prototype, "slot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TreasureCardDTO.prototype, "extraAction", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TreasureCardDTO.prototype, "extraAdditionId", void 0);
exports.TreasureCardDTO = TreasureCardDTO;
//# sourceMappingURL=treasure-card.dto.js.map