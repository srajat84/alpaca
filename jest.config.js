module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  },
  testPathIgnorePatterns: ["/node_modules/"],
  watchPathIgnorePatterns: ["/logs/", "/pacts/"],
  coverageThreshold: {
    global: {
      branches: 77,
      functions: 85,
      lines: 88,
      statements: 88
    }
  }
};
