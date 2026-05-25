import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "node_modules", "coverage"]),

  // ─────────────────────────────
  // App code (browser)
  // ─────────────────────────────
  {
    files: ["src/**/*.{js,jsx}", "**/*.{js,jsx}"],
    ignores: ["scripts/**", "public/**"],

    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    rules: {
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          // varsIgnorePattern は外す方が安全（取り逃し減る）
          // varsIgnorePattern: "^_", // ←必要ならこのくらいに絞る
        },
      ],
    },
  },

  // ─────────────────────────────
  // Node scripts (node)
  // ─────────────────────────────
  {
    files: ["scripts/**/*.{js,cjs,mjs}", "*.config.{js,cjs,mjs}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
]);