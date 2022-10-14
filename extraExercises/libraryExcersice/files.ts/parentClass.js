"use strict";
exports.__esModule = true;
exports.Parent = void 0;
var Parent = /** @class */ (function () {
    function Parent(pTittle, pPagesNumber, pAuthor, pPrice) {
        this.tittle = pTittle;
        this.pagesNumber = pPagesNumber;
        this.author = pAuthor;
        this.price = pPrice;
    }
    Parent.prototype.getTittle = function () {
        return this.tittle;
    };
    Parent.prototype.getPagesNumber = function () {
        return this.pagesNumber;
    };
    Parent.prototype.getAuthor = function () {
        return this.author;
    };
    Parent.prototype.getPrice = function () {
        return this.price;
    };
    return Parent;
}());
exports.Parent = Parent;
