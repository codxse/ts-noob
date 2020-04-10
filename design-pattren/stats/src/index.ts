import { MatchReader, MatchData } from "./MatchReader";
import { MatchResult } from "./MatchResult";

let manUtdWins = 0;

const csvReader = new MatchReader("./original.csv");
csvReader.read()
const csvData: MatchData[] = csvReader.csvData;

for (let match of csvData) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUtdWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUtdWins++;
  }
}

console.log(csvData);
console.log(`Man Utd won ${manUtdWins}`);