import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginCreatorRoot =
  "/Users/goodcheng/.codex/skills/.system/plugin-creator";
const readMarketplaceName = resolve(
  pluginCreatorRoot,
  "scripts/read_marketplace_name.py",
);
const updateCachebuster = resolve(
  pluginCreatorRoot,
  "scripts/update_plugin_cachebuster.py",
);

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: options.capture ? ["ignore", "pipe", "inherit"] : "inherit",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }

  return result.stdout?.trim() ?? "";
}

const marketplaceName = run("python3", [readMarketplaceName], {
  capture: true,
});

if (!marketplaceName) {
  throw new Error("Could not determine the local Codex marketplace name.");
}

run("python3", [updateCachebuster, repoRoot]);
run("codex", ["plugin", "add", `awesome-image-skills@${marketplaceName}`]);

console.log(`Updated and installed awesome-image-skills@${marketplaceName}.`);
