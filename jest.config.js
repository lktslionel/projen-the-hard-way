/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'node',
  testMatch: ['**/*.specs.ts', '**/*.steps.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  clearMocks: true,
  verbose: true
};