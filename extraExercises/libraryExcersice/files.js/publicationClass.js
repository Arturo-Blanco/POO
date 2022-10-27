"use strict";
exports.__esModule = true;
exports.Publication = void 0;
var Publication = /** @class */ (function () {
    function Publication(pTittle, pPagesNumber, pAuthor, pPrice) {
        this.tittle = pTittle;
        this.pagesNumber = pPagesNumber;
        this.author = pAuthor;
        this.price = pPrice;
    }
    Publication.prototype.getTittle = function () {
        return this.tittle;
    };
    Publication.prototype.getPagesNumber = function () {
        return this.pagesNumber;
    };
    Publication.prototype.getAuthor = function () {
        return this.author;
    };
    Publication.prototype.getPrice = function () {
        return this.price;
    };
    return Publication;
}());
exports.Publication = Publication;
