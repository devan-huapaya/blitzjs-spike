module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "unused-imports", "jsx-a11y"],
  extends: [
    "blitz",
    "eslint:recommended",
    // "plugin:@typescript-eslint/recommended", check if blitz needs this
    "plugin:prettier/recommended",
    // JSX-A11y Configurations can be found at
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    "plugin:jsx-a11y/recommended",
  ],
  overrides: [
    {
      files: [
        "**/*.spec.js",
        "**/*.spec.ts",
        "**/*.spec.jsx",
        "**/*.spec.tsx",
        "test/**/*.ts",
        "test/**/*.tsx",
      ],
      env: {
        jest: true,
      },
    },
  ],
}
