module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  setupFiles: ['dotenv/config'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleNameMapper: {
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
  },
};
