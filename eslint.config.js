import eslintPluginAstro from "eslint-plugin-astro";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        ecmaFeatures: { jsx: true },
      },
    },
  },
  {
    files: ["**/*.tsx", "**/*.jsx"],
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser },
    },
    settings: { react: { version: "detect" } },
  },
  {
    files: ["**/*.tsx", "**/*.jsx"],
    ...reactPlugin.configs.flat["jsx-runtime"],
  },
  {
    files: ["**/*.tsx", "**/*.jsx"],
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
    processor: "astro/client-side-ts",
  },
];
