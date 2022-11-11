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
exports.Client = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const Sale_1 = require("./Sale");
const PreSale_1 = require("./PreSale");
let Client = class Client {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'clientId', type: 'bigint' }),
    __metadata("design:type", Number)
], Client.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'clientName',
        length: 20,
        nullable: false
    }),
    (0, class_validator_1.Length)(1, 20),
    __metadata("design:type", String)
], Client.prototype, "clientName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'clientLastName',
        length: 20,
        nullable: false
    }),
    (0, class_validator_1.Length)(1, 20),
    __metadata("design:type", String)
], Client.prototype, "clientLastName", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Sale_1.Sale, (sale) => sale.client),
    __metadata("design:type", Sale_1.Sale)
], Client.prototype, "sale", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PreSale_1.PreSale, (PreSale) => PreSale.client),
    __metadata("design:type", PreSale_1.PreSale)
], Client.prototype, "preSale", void 0);
Client = __decorate([
    (0, typeorm_1.Entity)({ name: 'Client' })
], Client);
exports.Client = Client;
//# sourceMappingURL=Client.js.map