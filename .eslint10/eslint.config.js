import js from "@eslint/js";
import vuePlugin from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";

export default defineConfig([
  js.configs.recommended,
  ...ts.configs.recommended,
  vuePlugin.configs["vue3-recommended"],
  {
    ignores: [
      "node_modules",
      "dist",
      "public",
      "*.sh",
      "*.md",
      "*.woff",
      "*.ttf",
      ".vscode",
      ".idea",
      "dist/",
      "/public/",
      "/docs",
      ".husky",
      ".local",
      "/bin/",
      "/src/mock/"
    ]
  },
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      parser: vuePlugin.parser,
      parserOptions: {
        parser: ts.parser
      }
    },
    rules: {
      "no-var": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "prefer-const": "off",
      "no-use-before-define": "off",
      "no-irregular-whitespace": "off",

      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      "vue/script-setup-uses-vars": "error",
      "vue/v-slot-style": "error",
      "vue/no-mutating-props": "off",
      "vue/no-v-html": "off",
      "vue/custom-event-name-casing": "off",
      "vue/attributes-order": "off",
      "vue/one-component-per-file": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/max-attributes-per-line": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/attribute-hyphenation": "off",
      "vue/require-default-prop": "off",
      "vue/multi-word-component-names": "off",

      "no-console": "error"
    }
  }
]);
