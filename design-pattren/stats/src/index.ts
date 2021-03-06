import { MatchReader, MatchData } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const csvFileReader: CsvFileReader = new CsvFileReader("./original.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUtdWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUtdWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUtdWins++;
  }
}

console.log(`Man Utd won ${manUtdWins}`);