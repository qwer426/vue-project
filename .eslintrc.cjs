/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier"
    ],
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: {
        indent: ["warn", 2, "tab"],
        camelcase: 0,
        "no-unused-vars": 1,
        "vue/no-unused-components": 1,
        useTabs: false
    },
};
