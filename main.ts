import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Variant B — training-set romance: the speaker offers itself as the
// training data that never overfits. Distinct from variant A's
// entropy / mutual-information line and from any loss-function line.
// Why it fits the brief: a single self-contained AI-flavoured pickup
// line — "dataset" / "training set" / "overfits" grounds it in robot
// romance, while the never-overfits twist turns a machine-learning
// failure mode into a promise of lasting love, so the joke lands for
// both AI-savvy and general readers in one sentence.
const LINE =
  "If love were a dataset, I'd let you be the training set that never overfits my heart.";

const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry must be 1-200 non-whitespace characters, got ${length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${length} characters to ${join(outDir, "entry.txt")}`);
