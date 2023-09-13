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
exports.ErrorWrapper = void 0;
var constant_1 = require("@/config/constant");
var ErrorWrapper = /** @class */ (function (_super) {
    __extends(ErrorWrapper, _super);
    function ErrorWrapper(_a) {
        var code = _a.code, _b = _a.error, error = _b === void 0 ? {} : _b, _c = _a.message, message = _c === void 0 ? constant_1.ERROR_MESSAGE[code] : _c;
        var _this = _super.call(this, message) || this;
        Object.assign(_this, error);
        _this.codeDesc = constant_1.ERROR_CODE_DESC[code];
        _this.code = code;
        return _this;
    }
    return ErrorWrapper;
}(Error));
exports.ErrorWrapper = ErrorWrapper;
