const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  recommendedConfig: {
    extends: ["eslint:recommended"],
  },
  baseDirectory: __dirname,
});

module.exports = [
  ...compat.config({
    extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      "react-hooks/exhaustive-deps": "warn",
    },
  }),
];
