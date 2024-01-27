"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthoriztionError = exports.NotFoundError = exports.UnknownError = void 0;
/**
 * @extends Error
 * @name UnknownError
 */
var UnknownError = /** @class */ (function (_super) {
    __extends(UnknownError, _super);
    function UnknownError(message) {
        var _this = _super.call(this) || this;
        _this.status = 500;
        _this.name = 'Unknown error';
        _this.message = message || 'Uknown error ocurred';
        return _this;
    }
    return UnknownError;
}(Error));
exports.UnknownError = UnknownError;
/**
 * @extends Error
 * @name NotFoundError
 */
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(name) {
        var _this = _super.call(this) || this;
        _this.status = 404;
        _this.name = 'Not Found Error';
        _this.message = "".concat(name, " Can not be found");
        return _this;
    }
    return NotFoundError;
}(Error));
exports.NotFoundError = NotFoundError;
/**
 * @extends Error
 * @name AuthoriztionError
 */
var AuthoriztionError = /** @class */ (function (_super) {
    __extends(AuthoriztionError, _super);
    function AuthoriztionError(message) {
        var _this = _super.call(this) || this;
        _this.status = 401;
        _this.name = 'Unauthenticated Error';
        _this.message = message || "Unauthenticated error";
        return _this;
    }
    return AuthoriztionError;
}(Error));
exports.AuthoriztionError = AuthoriztionError;
