module.exports = {
    testEnvironment: 'node',
    verbose: true,
    testTimeout: 10000,
    testPathIgnorePatterns: ["/node_modules/", "/infrastructure/"],
    moduleNameMapper: {
        "^project/(.*)$": "<rootDir>/src/$1",
        "^project-test/(.*)$": "<rootDir>/test/$1",
    },
};
