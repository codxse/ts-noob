"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.csvData = [];
        this.fileName = fileName;
    }
    CsvFileReader.prototype.read = function () {
        this.csvData = fs_1.default
            .readFileSync(this.fileName, { encoding: "utf-8" })
            .split("\n")
            .map(this._splitLine)
            .map(this.mapRow);
    };
    CsvFileReader.prototype._splitLine = function (row) {
        return row.split(",");
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
