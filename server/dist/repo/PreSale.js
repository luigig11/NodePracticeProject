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
exports.PreSale = void 0;
const typeorm_1 = require("typeorm");
const Sale_1 = require("./Sale");
const Client_1 = require("./Client");
const Product_1 = require("./Product");
let PreSale = class PreSale {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'presaleId', type: 'bigint' }),
    __metadata("design:type", Number)
], PreSale.prototype, "presaleId", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'preSalePriceDollar',
        nullable: false
    }),
    __metadata("design:type", Number)
], PreSale.prototype, "preSalePriceDollar", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'preSalePriceCordoba',
        nullable: false
    }),
    __metadata("design:type", Number)
], PreSale.prototype, "preSalePriceCordoba", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'clientId' }),
    __metadata("design:type", Number)
], PreSale.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'productId' }),
    __metadata("design:type", Number)
], PreSale.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Sale_1.Sale, (sale) => sale.preSale),
    __metadata("design:type", Sale_1.Sale)
], PreSale.prototype, "sale", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Client_1.Client, (client) => client.preSale),
    (0, typeorm_1.JoinColumn)({ name: 'clientId' }),
    __metadata("design:type", Client_1.Client)
], PreSale.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Product_1.Product, (product) => product.preSale),
    (0, typeorm_1.JoinColumn)({ name: 'productId' }),
    __metadata("design:type", Product_1.Product)
], PreSale.prototype, "product", void 0);
PreSale = __decorate([
    (0, typeorm_1.Entity)({ name: 'PreSale' })
], PreSale);
exports.PreSale = PreSale;
//# sourceMappingURL=PreSale.js.map