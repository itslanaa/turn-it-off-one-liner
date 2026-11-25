import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Have you tried turning it off and on again? Good. Now turn off the computer, the router, and your hope of a different answer.";

const chars = [...entry].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${chars} chars) to ${outDir}`);
