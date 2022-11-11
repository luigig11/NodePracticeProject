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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const Batch_1 = require("./Batch");
const Sale_1 = require("./Sale");
const PreSale_1 = require("./PreSale");
let Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'productId', type: 'bigint' }),
    __metadata("design:type", Number)
], Product.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'productCode',
        length: 20,
        nullable: false,
        unique: true
    }),
    (0, class_validator_1.Length)(1, 20),
    __metadata("design:type", String)
], Product.prototype, "productCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'factoryId',
        length: 20,
        nullable: false
    }),
    (0, class_validator_1.Length)(1, 20),
    __metadata("design:type", String)
], Product.prototype, "factoryId", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'dollarPrice',
        nullable: false
    }),
    __metadata("design:type", Number)
], Product.prototype, "dollarPrice", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'cordobaPrice',
        nullable: false
    }),
    __metadata("design:type", Number)
], Product.prototype, "cordobaPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'batchid' }),
    __metadata("design:type", Number)
], Product.prototype, "batchid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Batch_1.Batch, (batch) => batch.products),
    (0, typeorm_1.JoinColumn)({ name: 'batchid' }),
    __metadata("design:type", Batch_1.Batch)
], Product.prototype, "batch", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Sale_1.Sale, (sale) => sale.product),
    __metadata("design:type", Sale_1.Sale)
], Product.prototype, "sale", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PreSale_1.PreSale, (preSale) => preSale.product),
    __metadata("design:type", PreSale_1.PreSale)
], Product.prototype, "preSale", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)({ name: 'Product' })
], Product);
exports.Product = Product;
//# sourceMappingURL=Product.js.map