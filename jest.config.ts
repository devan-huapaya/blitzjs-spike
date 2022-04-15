import { compilerOptions } from "./tsconfig.json"
import type { Config } from "@jest/types"
import { pathsToModuleNameMapper } from "ts-jest"

const config: Config.InitialOptions = {
  preset: "blitz",
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
  moduleNameMapper: {
    /* Convert typescript config paths to module names for testing
		https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping */
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),

    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__tests__/__mocks__/styleMock.js",

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/__tests__/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/__tests__/__mocks__", // these are handled by playwright
    "<rootDir>/__tests__/e2e", // these are handled by playwright
    ".blitz.config.compiled.js",
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "./src"], // Needed for tsconfig paths
}

export default config
