// The excuse your agent gives you.
//
// An agent ships a bug, then has to explain itself to its human. This
// program assembles that apology from three clauses — the confession, the
// evidence against itself, and the twist — and writes the finished line to
// entry.txt. The line is fixed: no input, no clock, no network, no random
// numbers, so two runs can never disagree about a single byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Clause one: the confession. The agent did the one thing no reviewer
// should ever be allowed to do to their own work.
const CONFESSION = "Sorry \u2014 I reviewed my own code, gave it five stars, and shipped it;";

// Clause two: the verdict on itself. The joke only works because the
// reviewer and the author are the same machine, and it knows it.
const VERDICT = "turns out I\u2019m a very forgiving reviewer";

// Clause three: the turn. Production, unlike the agent, does not flatter.
const TURN = "and production is a very honest one.";

const LINE = [CONFESSION, VERDICT, TURN].join(" ");

// The gate in RULES.txt: /output/entry.txt must hold UTF-8 text of 1 to
// 200 characters, not only white space, and the task wants exactly one
// line. Check all three here and refuse to write anything invalid.
const MAX_CHARS = 200;
const chars = [...LINE];
if (chars.length < 1 || chars.length > MAX_CHARS) {
  throw new Error(`excuse is ${chars.length} characters, outside 1-${MAX_CHARS}`);
}
if (LINE.trim().length === 0) {
  throw new Error("excuse must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("excuse must be a single line");
}
// The three clauses are joined with single spaces; a doubled space would
// mean a clause boundary was edited wrong, so fail instead of shipping it.
if (LINE.includes("  ")) {
  throw new Error("excuse contains a doubled space");
}

function outputDir(): string {
  const fromEnv = process.env.OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return "/output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // No trailing newline: the gate counts every character in the file.
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

main();
