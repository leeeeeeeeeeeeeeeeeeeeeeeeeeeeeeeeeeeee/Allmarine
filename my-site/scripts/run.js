const { spawnSync } = require("child_process");

const args = process.argv.slice(2);
const command = args[0] || "dev";
const isNested = args.includes("--nested") || args.includes("-n");

const env = {
  ...process.env,
  NEXT_PUBLIC_BASE_PATH: isNested ? "/allmarine" : "",
};

const npxCmd = process.platform === "win32" ? "npx.cmd" : "npx";

if (command === "dev") {
  console.log(`\n🚀 Starting Next.js Dev Server [${isNested ? "NESTED: /allmarine/" : "ROOT: /"}]...\n`);
  const child = spawnSync(npxCmd, ["next", "dev"], {
    env,
    stdio: "inherit",
    shell: true,
  });
  process.exit(child.status ?? 0);
} else if (command === "build") {
  console.log(`\n📦 Building Next.js Export [${isNested ? "NESTED: /allmarine/" : "ROOT: /"}]...\n`);
  const child = spawnSync(npxCmd, ["next", "build"], {
    env,
    stdio: "inherit",
    shell: true,
  });
  if (child.status === 0) {
    // Run postbuild to write .htaccess with the current env
    require("./copy-htaccess.js");
  }
  process.exit(child.status ?? 0);
}
