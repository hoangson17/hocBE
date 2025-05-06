"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const btDecorator_1 = require("../inc/btDecorator");
const defaultConfig = {
    apiUrl: "https://api.example.com",
    retry: 3,
};
let apiService = class apiService {
};
apiService = __decorate([
    (0, btDecorator_1.InjectDefaults)(defaultConfig)
], apiService);
//apiUrl!: string; // cam ket giá trị sẽ không bao giờ là null hoặc undefine
const api = new apiService();
console.log(api.apiUrl);
console.log(api.retry);
