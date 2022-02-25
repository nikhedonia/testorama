module.exports = (dir) => ({
    displayName: require(dir+'/package.json').name,
    testMatch: [
      dir + "/src/**/?(*.)+(spec|test).[jt]s?(x)" 
    ],
    testPathIgnorePatterns: ["/node_modules", "/dist/"], // skip build artefacts
    rootDir: "../..", // ensure moduleNameMappers can remap to other modules
    moduleNameMapper: {
      "^@testorama/superlib/(.+)$": "<rootDir>/libs/superlib/src/$1", // this allows running tests without building libs first ensuring you always test the source 
      "^@testorama/superlib$": "<rootDir>/libs/superlib/src/index.js" // and also enables change detection across module boundaries
    }
})