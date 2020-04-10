"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var manUtdWins = 0;
var csvReader = new MatchReader_1.MatchReader("./original.csv");
csvReader.read();
var csvData = csvReader.csvData;
for (var _i = 0, csvData_1 = csvData; _i < csvData_1.length; _i++) {
    var match = csvData_1[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUtdWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUtdWins++;
    }
}
console.log(csvData);
console.log("Man Utd won " + manUtdWins);
