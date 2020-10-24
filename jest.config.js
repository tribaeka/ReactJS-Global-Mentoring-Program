module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "moduleNameMapper": {
        "\\.(css|scss)$": "identity-obj-proxy",
        "@store/(.*)": "<rootDir>/src/store/$1",
        "@assets/(.*)": "<rootDir>/src/assets/$1",
        "@components/(.*)": "<rootDir>/src/components/$1",
        "@selectors/(.*)": "<rootDir>/src/selectors/$1"
    },
    "globals": {
      "ts-jest": {
          "diagnostics": {
              "warnOnly": true
          }
      }
    },
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node",
        "scss"
    ],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
}
