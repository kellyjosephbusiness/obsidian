import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Research artifacts copied from cloned sites and one-off asset scripts are not app code.
    "docs/**",
    "scripts/**",
    // Transient agent worktrees carry their own checkout and node_modules.
    ".claude/worktrees/**",
  ]),
]);

export default eslintConfig;
