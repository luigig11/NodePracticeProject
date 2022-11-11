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
exports.Sale = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
const Client_1 = require("./Client");
const PreSale_1 = require("./PreSale");
let Sale = class Sale {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'saleId', type: 'bigint' }),
    __metadata("design:type", Number)
], Sale.prototype, "saleId", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'salePriceDollar',
        nullable: false
    }),
    __metadata("design:type", Number)
], Sale.prototype, "salePriceDollar", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'salePriceCordoba',
        nullable: false
    }),
    __metadata("design:type", Number)
], Sale.prototype, "salePriceCordoba", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'saleDate',
        nullable: true
    }),
    __metadata("design:type", Date)
], Sale.prototype, "saleDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'productId' }),
    __metadata("design:type", Number)
], Sale.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'clientId' }),
    __metadata("design:type", Number)
], Sale.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'presaleId' }),
    __metadata("design:type", Number)
], Sale.prototype, "presaleId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Product_1.Product, (product) => product.sale),
    (0, typeorm_1.JoinColumn)({ name: 'productId' }),
    __metadata("design:type", Product_1.Product)
], Sale.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Client_1.Client, (client) => client.sale),
    (0, typeorm_1.JoinColumn)({ name: 'clientId' }),
    __metadata("design:type", Client_1.Client)
], Sale.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PreSale_1.PreSale, (preSale) => preSale.sale),
    (0, typeorm_1.JoinColumn)({ name: 'presaleId' }),
    __metadata("design:type", PreSale_1.PreSale)
], Sale.prototype, "preSale", void 0);
Sale = __decorate([
    (0, typeorm_1.Entity)({ name: 'Sale' })
], Sale);
exports.Sale = Sale;
//# sourceMappingURL=Sale.js.map