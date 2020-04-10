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
var CharactersColletion = /** @class */ (function (_super) {
    __extends(CharactersColletion, _super);
    function CharactersColletion(collection) {
        var _this = _super.call(this) || this;
        _this.collection = collection;
        return _this;
    }
    Object.defineProperty(CharactersColletion.prototype, "length", {
        get: function () {
            return this.collection.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersColletion.prototype.compare = function (leftIndex, rightIndex) {
        return this.collection[leftIndex].toLowerCase() > this.collection[rightIndex].toLowerCase();
    };
    CharactersColletion.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.collection.split('');
        var leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.collection = characters.join('');
    };
    return CharactersColletion;
}(ISorter_1.ISorter));
exports.CharactersColletion = CharactersColletion;
