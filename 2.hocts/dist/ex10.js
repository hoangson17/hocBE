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
const decorator_1 = require("./inc/decorator");
// @CLassDecorator
// @Logger("A")
class User {
    constructor() {
        // @PropertyDecorrator
        this.name = " hoàng sơn";
        // @PropertyDecorrator
        this.email = "son@gmail.com";
        //   @MinLength(5)
        this.message = null;
        //   @MinLength(6)
        this.demo = null;
        this.data = ["item1", "item2", "item3"];
    }
    // @MethodDecorator
    getName(a) {
        console.log("getname", a);
    }
    get latest() {
        return this.data[this.data.length - 1];
    }
    set latest(value) {
        this.data.push(value);
    }
    setName(value, a) {
        console.log("value ", value);
        console.log("a ", a);
    }
}
__decorate([
    decorator_1.LogAccessor,
    decorator_1.ValidateBlacklist,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], User.prototype, "latest", null);
__decorate([
    __param(0, decorator_1.LogParam),
    __param(1, decorator_1.LogParam),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], User.prototype, "setName", null);
// const user = new User();
// user.message = "hoc node js";
// console.log(user.message);
// user.demo = "Hoàng sơn";
// console.log(user.demo);
const user = new User();
// user.latest = 'item4 admin';
// console.log(user.latest);
user.setName("acb", "a");
