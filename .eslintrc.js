const path = require("path");

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: path.resolve("./tsconfig.json"),
        ecmaFeatures: {
            modules: true,
            jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: false,
        createDefaultProgram: true,
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    plugins: ["@typescript-eslint"],
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                moduleDirectory: ["node_modules", "./src/"],
            },
        },
    },
};