"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var product_1 = require("./product");
var authentication_middleware_1 = require("../middleware/authentication.middleware");
var router = express_1.default.Router();
router.post('/create-product', authentication_middleware_1.authMiddleware, product_1.createProduct);
router.get('/get-product', authentication_middleware_1.authMiddleware, product_1.getProduct);
exports.default = router;
