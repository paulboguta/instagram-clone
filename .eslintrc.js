module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
        "plugin:jest/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
        "project": "./tsconfig.json",
    },
    "plugins": [
        "import",
        "@typescript-eslint",
        "jest",
        "prettier",
        "react",
    ],
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": ['.ts', '.tsx'],
        },
        "import/resolver": {
            node: {
                moduleDirectory: ["node_modules", "src"],
            }
        }
    },
    ignorePatterns: [
        "**/*.js",
        "**/*.json",
        "node_modules",
        "public",
        "coverage",
        "dist",
        "build",
        "cypress",
    ],
    "rules": {
        "react/function-component-definition": ["error", {namedComponents: "arrow-function"}],
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "no-param-reassign": ["error", { "props": false }],
        "import/no-default-export": "error",
    },
}
