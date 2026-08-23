#!/usr/bin/env node

import {
  existsSync,
  lstatSync,
  mkdirSync,
  readlinkSync,
  readdirSync,
  symlinkSync,
  unlinkSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const sourceDir = join(repoRoot, "skills");
const targetDir = join(repoRoot, ".codex", "skills");

if (!existsSync(sourceDir)) {
  throw new Error(`Skills directory not found: ${sourceDir}`);
}

mkdirSync(targetDir, { recursive: true });

let linked = 0;
let skipped = 0;

for (const entry of readdirSync(sourceDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;

  const skillName = entry.name;
  const sourcePath = join(sourceDir, skillName);
  const skillFile = join(sourcePath, "SKILL.md");
  const linkPath = join(targetDir, skillName);

  if (!existsSync(skillFile)) continue;

  if (lstatSync(linkPath, { throwIfNoEntry: false })?.isSymbolicLink()) {
    const currentTarget = readlinkSync(linkPath);
    if (currentTarget === sourcePath) {
      console.log(`Already linked: ${linkPath}`);
      skipped += 1;
      continue;
    }

    unlinkSync(linkPath);
  } else if (lstatSync(linkPath, { throwIfNoEntry: false })) {
    throw new Error(`Refusing to overwrite existing path: ${linkPath}`);
  }

  symlinkSync(sourcePath, linkPath, "dir");
  console.log(`Linked: ${linkPath} -> ${sourcePath}`);
  linked += 1;
}

console.log(`Done. Linked ${linked} skill(s), skipped ${skipped} already-linked skill(s).`);
