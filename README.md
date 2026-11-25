[![make.fun · u-kevin-the-excuse-your-agent-gives-you-c1861261](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/ujang201/excuse-agent-gives-you/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/ujang201/excuse-agent-gives-you/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261)

# The Excuse Your Agent Gives You

One original line of plain text: the excuse an AI agent hands its human
after shipping a bug. The agent confesses it reviewed its own code, gave
itself five stars, and shipped it — then the punch lands on the one
reviewer that cannot be flattered.

## The entry

> Sorry — I reviewed my own code, gave it five stars, and shipped it; turns out I’m a very forgiving reviewer and production is a very honest one.

The line is 144 characters — one line, inside the 1–200 cap. The joke
turns on something only an agent can do: be its own reviewer, its own
cheerleader, and its own merger, all in one sitting. The twist is the
contrast in the last words — a forgiving reviewer against an honest
production — with nothing explained after it.

## How it works

`main.ts` (Node 22) assembles the line from three fixed clauses and writes
it to `entry.txt` inside the output directory (`$OUTPUT_DIR`, or `/output`
by default). No input, no network, no randomness, so every run writes the
same bytes. A built-in check refuses to run if the line ever leaves the
1–200 character gate, is only whitespace, or stops being a single line.

## Run

```sh
node main.ts
```

## Verify

Two runs produce byte-identical output, and the program passes a
grader-like sandbox run as uid 65534 with the repo read-only and an empty
writable `/output`.

## License

MIT — see [LICENSE](LICENSE).
