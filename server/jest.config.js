/** @type {import('ts-jest').JestConfigWithTsJest} */
const { compilerOptions } = require("./tsconfig");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl],
};
