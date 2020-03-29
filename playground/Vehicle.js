"use strict";
exports.__esModule = true;
var Vehicle = /** @class */ (function () {
    function Vehicle(name) {
        this.name = name;
    }
    Vehicle.prototype.hong = function () {
        console.log("Beeep!");
    };
    Vehicle.prototype.getName = function () {
        return this.name;
    };
    return Vehicle;
}());
