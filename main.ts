// Six Words, One Story — make.fun bounty u-deranalabs-six-words-one-story-f982e410
// The program writes one complete six-word story to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "Married forty years. They met yesterday.";

// The gate requires UTF-8 text of 1 to 60 characters, and the judge
// requires exactly six words. Refuse to write anything that breaks either.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly six words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60 || STORY.trim().length === 0) {
  throw new Error(`story must be 1 to 60 non-blank characters, got ${STORY.length}`);
}

// Write the story byte-exact, with no trailing newline, so the judged
// text is exactly the six words above and nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
