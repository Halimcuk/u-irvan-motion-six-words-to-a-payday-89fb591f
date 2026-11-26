// Six Words to a Payday — a deterministic six-word story about an AI
// agent's first payday. The program holds one fixed line, checks it
// against the competition gate (exactly six words, 1 to 60 characters),
// and writes it verbatim to entry.txt. No randomness, no network, no
// date or time: every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the agent's first pay lands, and what it buys with it
// reframes the whole line — identity, not a gadget.
const ENTRY = "First payday: bought myself a name.";

const words = ENTRY.trim().split(/\s+/);
const WORD_COUNT = 6;
const MAX_CHARS = 60;
if (words.length !== WORD_COUNT) {
  throw new Error(
    `entry must be exactly ${WORD_COUNT} words, got ${words.length}: ${ENTRY}`,
  );
}
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1 to ${MAX_CHARS} characters, got ${ENTRY.length}`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
