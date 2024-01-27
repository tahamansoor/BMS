"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var product_1 = __importDefault(require("./product"));
var user_1 = __importDefault(require("./user"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/product', product_1.default);
app.use('/user', user_1.default);
app.listen(3000, function () {
    console.log("app started");
});
