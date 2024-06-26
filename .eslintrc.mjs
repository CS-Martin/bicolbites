// {
//   "extends": "next/core-web-vitals"

// }
export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google", "prettier", "next/core-web-vitals"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // Define rules here :D
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
