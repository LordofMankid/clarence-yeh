// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },

        },
        {
            files: '*.mdx',
            options: {
                parser: 'mdx'
            },
        }
    ],
    arrowParens: "always",
    bracketSpacing: true,
    endOfLine: "auto",
    htmlWhitespaceSensitivity: "css",
    insertPragma: false,
    singleAttributePerLine: false,
    bracketSameLine: false,
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    printWidth: 80,
    proseWrap: "preserve",
    quoteProps: "as-needed",
    requirePragma: false,
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "es5",
    useTabs: false,
    embeddedLanguageFormatting: "auto",
    vueIndentScriptAndStyle: false,
    parser: "typescript"
};