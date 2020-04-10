"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ISorter_1 = require("./ISorter");
var NumbersCollection = /** @class */ (function (_super) {
    __extends(NumbersCollection, _super);
    function NumbersCollection(collection) {
        var _this = _super.call(this) || this;
        _this.collection = collection;
        return _this;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.collection.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.collection[leftIndex] > this.collection[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.collection[leftIndex];
        this.collection[leftIndex] = this.collection[rightIndex];
        this.collection[rightIndex] = leftHand;
    };
    return NumbersCollection;
}(ISorter_1.ISorter));
exports.NumbersCollection = NumbersCollection;
