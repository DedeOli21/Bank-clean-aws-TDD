module.exports = {
  // preset: '@shelf/jest-mongodb',
  roots: ['<rootDir>/__tests__'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!**/__tests__/**',
    '!**/config/**'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/__tests__/$1'
  },
  setupFiles: ['dotenv/config']
}
