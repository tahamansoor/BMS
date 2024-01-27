"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = void 0;
/**
 * @name SuccessResponse
 * @argument message
 */
var SuccessResponse = /** @class */ (function () {
    function SuccessResponse(message, data, metaData) {
        this.error = false;
        this.message = message;
        this.data = data;
        this.metaData = metaData;
    }
    return SuccessResponse;
}());
exports.SuccessResponse = SuccessResponse;
