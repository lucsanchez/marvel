const path = require("path");

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:react-hooks/recommended",
        "plugin:unicorn/recommended"
    ],
    ignorePatterns: [
        ".eslintrc.cjs",
        "dist",
        "node_modules",
        "vitest.config.ts",
        "vite.config.ts",
        "vite-env.d.ts",
        "test/"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "react-refresh",
        "@typescript-eslint",
        "import",
        "unicorn"
    ],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "import/newline-after-import": ["error", { count: 1 }],
        "import/order": [
            "error",
            {
                groups: ["external", "internal", "parent", "sibling", "index", "unknown"],
                pathGroups: [
                    {
                        pattern: "@/**/*.{css,scss}",
                        patternOptions: { matchBase: true },
                        group: "unknown",
                        position: "after",
                    },
                    {

                        pattern: "*.{css,scss}",
                        patternOptions: { matchBase: true },
                        group: "unknown",
                        position: "after",
                    },
                    { pattern: "@/**", group: "internal" },
                ],
                "newlines-between": "always",
                alphabetize: { order: "asc", caseInsensitive: true },
            },
        ],
        "unicorn/better-regex": "error",
        "unicorn/filename-case": ["error", {
            "cases": {
                "camelCase": true,
                "kebabCase": true
            }
        }],
        "unicorn/prevent-abbreviations": "off",
        "unicorn/no-null": "off",
    },
    settings: {
        "import/resolver": {
            alias: {
                map: [['@', path.resolve(__dirname, './src')]],
                extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx']
            },
            node: {
                extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx']
            }
        }
    }
};
