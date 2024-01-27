"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = require("./user");
var router = express_1.default.Router();
router.post('/sign-up', user_1.signUp);
router.post('/sign-in', user_1.signIn);
exports.default = router;
