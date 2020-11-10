module.exports = {
    "moduleNameMapper": {
        "\\.(css|scss)$": "identity-obj-proxy",
        "@store/(.*)": "<rootDir>/store/$1",
        "@assets/(.*)": "<rootDir>/assets/$1",
        "@components/(.*)": "<rootDir>/components/$1",
        "@selectors/(.*)": "<rootDir>/selectors/$1"
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
    "setupFilesAfterEnv": ["<rootDir>/setupEnzyme.ts"],
}
