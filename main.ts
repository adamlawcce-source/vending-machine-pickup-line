import { mkdirSync, writeFileSync } from "node:fs";

// A vending machine flirting with a passing human, in its own voice: it is
// the coil in slot B4 holding the human's favorite snack hostage, and it
// offers to drop it free. The machine's world does the work — coil, slot,
// button, drop, exact change — and the punch lands in the last few words
// ("just one smile"), so the line is charming rather than creepy and needs
// no picture or explanation to land. "Push" was chosen over "press" —
// shorter, punchier, and the verb a person actually uses on a machine.
const TEXT =
  "Hey, cutie — I'm the coil in B4 holding your favorite snack hostage. Push my button and I'll drop it free: exact change not required, just one smile.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-200 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
