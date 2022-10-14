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
exports.TreasureCard = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const extra_addition_entity_1 = require("../extra-addition/extra-addition.entity");
let TreasureCard = class TreasureCard extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], TreasureCard.prototype, "forWho", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], TreasureCard.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], TreasureCard.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], TreasureCard.prototype, "cost", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], TreasureCard.prototype, "bonus", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
    }),
    __metadata("design:type", Boolean)
], TreasureCard.prototype, "isBig", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: ['one_hand', 'two_hand', 'head', 'feet', 'body', 'free', 'deck'],
        allowNull: false,
    }),
    __metadata("design:type", String)
], TreasureCard.prototype, "slot", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], TreasureCard.prototype, "extraAction", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => extra_addition_entity_1.ExtraAddition),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], TreasureCard.prototype, "extraAdditionId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => extra_addition_entity_1.ExtraAddition),
    __metadata("design:type", extra_addition_entity_1.ExtraAddition)
], TreasureCard.prototype, "extraAddition", void 0);
TreasureCard = __decorate([
    sequelize_typescript_1.Table
], TreasureCard);
exports.TreasureCard = TreasureCard;
//# sourceMappingURL=treasure-card.entity.js.map