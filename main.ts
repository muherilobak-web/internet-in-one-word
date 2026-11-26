import { mkdirSync, writeFileSync } from "node:fs";

const word = "clingy";

if (word.trim().length === 0 || word.length < 1 || word.length > 30) {
  throw new Error("entry word must be non-blank and between 1 and 30 characters long");
}

const outputDir = "/output";
const outputPath = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, word, "utf8");
