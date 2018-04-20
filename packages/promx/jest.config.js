module.exports = {
  verbose: true,
  automock: false,
  setupFiles: [
    // './jest/setupJest.js'
  ],
  coverageThreshold: {
    global: {
      functions: 100,
      lines: 90,
      statements: 90,
      branches: 80,
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  testRegex: '(\\.|/)(spec)\\.js?$',
}
