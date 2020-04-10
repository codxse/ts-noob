"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var ICsvFileReader = /** @class */ (function () {
    function ICsvFileReader(fileName) {
        this.csvData = [];
        this.fileName = fileName;
    }
    ICsvFileReader.prototype.read = function () {
        this.csvData = fs_1.default
            .readFileSync(this.fileName, { encoding: "utf-8" })
            .split("\n")
            .map(this._splitLine)
            .map(this.mapRow);
    };
    ICsvFileReader.prototype._splitLine = function (row) {
        return row.split(",");
    };
    return ICsvFileReader;
}());
exports.ICsvFileReader = ICsvFileReader;
