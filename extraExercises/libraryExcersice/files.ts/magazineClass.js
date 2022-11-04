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
exports.__esModule = true;
exports.Magazine = void 0;
var publicationClass_1 = require("./publicationClass");
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(pTittle, pPagesNumber, pAuthor, pPrice, pNumber, pYear) {
        var _this = _super.call(this, pTittle, pPagesNumber, pAuthor, pPrice) || this;
        _this.number = pNumber;
        _this.year = pYear;
        return _this;
    }
    Magazine.prototype.getNumber = function () {
        return this.number;
    };
    Magazine.prototype.getYear = function () {
        return this.year;
    };
    return Magazine;
}(publicationClass_1.Publication));
exports.Magazine = Magazine;
