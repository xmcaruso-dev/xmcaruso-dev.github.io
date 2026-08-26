import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const out = "out";

const required = [
  ["/", "index.html"],
  ["/intake", "intake/index.html"],
  ["/privacy", "privacy/index.html"],
  ["/samples/law", "samples/law/index.html"],
  ["/samples/hvac", "samples/hvac/index.html"],
  ["/samples/dental", "samples/dental/index.html"],
];

const payLink = "https://buy.stripe.com/cNi3cv0kn7FVcN66i4enS00";
const banned = [/\bDashh\b/i, /\bMac Jets\b/i, /\baviation\b/i];
const errors = [];

for (const [route, file] of required) {
  const path = join(out, file);
  if (!existsSync(path)) {
    errors.push(`missing ${route} -> ${path}`);
    continue;
  }
  const html = readFileSync(path, "utf8");
  if (route.startsWith("/samples/") && !html.includes("SAMPLE LAYOUT")) {
    errors.push(`${route} is missing SAMPLE LAYOUT`);
  }
  if (route === "/" && !html.includes(payLink)) {
    errors.push(`home is missing Stripe payment link`);
  }
  for (const pattern of banned) {
    if (pattern.test(html)) {
      errors.push(`${route} contains banned copy matching ${pattern}`);
    }
  }
}

if (!existsSync(join(out, ".nojekyll"))) {
  errors.push("missing out/.nojekyll (needed so GitHub Pages does not ignore _next)");
}

if (errors.length) {
  console.error("Static export check failed:\n" + errors.map((e) => `- ${e}`).join("\n"));
  process.exit(1);
}

console.log("Static export contains required Friday Page routes.");
