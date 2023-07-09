module.exports = {
    env: {
        browser: true
    },
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        settings: {
            react: {
                version: "18.2"
            }
        },
        plugins: [
            "react-refresh"
        ],
    },
    rules: {
        "no-console": "warn",
        "no-unused-vars": "warn",
        "react/prop-types": "warn"
    }
}
