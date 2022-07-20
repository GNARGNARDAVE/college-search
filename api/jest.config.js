module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    setupFiles: ["<rootDir>/.jest/setEnvVars.js"],
    clearMocks: true,
    modulePathIgnorePatterns: ["<rootDir>/lib"]
};
