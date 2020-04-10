import fs from "fs";
import { MatchResult } from "./MatchResult";

export abstract class CsvFileReader<T> {
  csvData: T[] = [];
  fileName: string;

  abstract mapRow(row: string[]): T;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  read(): void {
    this.csvData = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map(this._splitLine)
      .map(this.mapRow);
  }

  private _splitLine(row: string): string[] {
    return row.split(",");
  }

}