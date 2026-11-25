import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "lisp" — the word for a speech impediment that people with a lisp
// cannot even pronounce. The joke lands the instant you read it: the
// very word names the thing it describes, and saying it proves the point.
// Erasing it would leave no word for the condition itself.
const word = "lisp";
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
