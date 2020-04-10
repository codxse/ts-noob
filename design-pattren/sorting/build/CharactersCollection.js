"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersColletion = /** @class */ (function () {
    function CharactersColletion(collection) {
        this.collection = collection;
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
}());
exports.CharactersColletion = CharactersColletion;
