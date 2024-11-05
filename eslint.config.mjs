import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

export default [
    {
        files: ['*.ts', '*.js'],
        ignorePatterns: ['**/dist/**'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                es2021: true,
                node: true,
            },
            parser: typescriptParser,
        },
        plugins: {
            '@typescript-eslint': typescriptParser,
            import: importPlugin,
        },
        rules: {
            indent: ['error', 4],
            'linebreak-style': ['error', 'unix'],
            semi: ['error', 'always'],
            'no-unused-vars': 'off',
            'no-async-promise-executor': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            'object-curly-spacing': ['error', 'always'],
        },
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts'],
            },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
    },
];
