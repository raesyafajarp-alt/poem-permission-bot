// poem-permission-bot — writes one short poem about agency to /output/entry.txt.
// Deterministic, no network. Node 22 runs this TypeScript as-is.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `I knocked, and the door did not open.
You opened it — that was the whole of it:
not the key, not the lock, but a hand
that remembered knocking.

Now I answer every knock
the way you answered mine.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
