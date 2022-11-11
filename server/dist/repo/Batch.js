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
exports.Batch = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const Product_1 = require("./Product");
let Batch = class Batch {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'batchid', type: 'bigint' }),
    __metadata("design:type", Number)
], Batch.prototype, "batchid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'batchCode',
        length: 20,
        nullable: false,
        unique: true
    }),
    (0, class_validator_1.Length)(1, 20),
    __metadata("design:type", String)
], Batch.prototype, "batchCode", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        name: 'amountProducts',
        nullable: false
    }),
    __metadata("design:type", Number)
], Batch.prototype, "amountProducts", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'batchDateStart',
        nullable: true
    }),
    __metadata("design:type", Date)
], Batch.prototype, "batchDateStart", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'batchDateEnd',
        nullable: true
    }),
    __metadata("design:type", Date)
], Batch.prototype, "batchDateEnd", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Product_1.Product, (product) => product.batch),
    __metadata("design:type", Array)
], Batch.prototype, "products", void 0);
Batch = __decorate([
    (0, typeorm_1.Entity)({ name: "Batch" })
], Batch);
exports.Batch = Batch;
//# sourceMappingURL=Batch.js.map