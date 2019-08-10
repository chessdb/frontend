module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module"
    },
    plugins: [
        "html",
        "svelte3"
    ],
    overrides: [
        {
            files: "**/*.svelte",
            processor: "svelte3/svelte3"
        }
    ],
    settings: {
        "svelte3/ignore-styles": () => true,
        "html": {
            "indent": 0,
            "report-bad-indent": "warn",
            "html-extensions": [
                ".html"
            ]
        }
    },
    rules: {

    }
}