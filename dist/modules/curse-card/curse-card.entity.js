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
exports.CurseCard = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const extra_addition_entity_1 = require("../extra-addition/extra-addition.entity");
let CurseCard = class CurseCard extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], CurseCard.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], CurseCard.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => extra_addition_entity_1.ExtraAddition),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], CurseCard.prototype, "extraAdditionId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => extra_addition_entity_1.ExtraAddition),
    __metadata("design:type", extra_addition_entity_1.ExtraAddition)
], CurseCard.prototype, "extraAddition", void 0);
CurseCard = __decorate([
    sequelize_typescript_1.Table
], CurseCard);
exports.CurseCard = CurseCard;
//# sourceMappingURL=curse-card.entity.js.map