import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx ? $': ['ts-jest',{ "useESM": true}]
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
export default config;