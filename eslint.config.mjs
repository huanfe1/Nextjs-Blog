import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import typescript from '@typescript-eslint/eslint-plugin';
import parserTypescript from '@typescript-eslint/parser';
import configPrettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

/** @type { import('eslint').Linter.Config[] } */
const config = [
    {
        ignores: ['**/node_modules', 'pnpm-lock.yaml', '.next', '.next-env.d.ts', '.turbo', '.output'],
    },
    {
        languageOptions: {
            ecmaVersion: 2022,
            globals: { ...globals.browser, ...globals.es2021, ...globals.node },
        },
        rules: {
            ...js.configs.recommended.rules,
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            '@next/next': nextPlugin,
        },
        rules: {
            ...reactPlugin.configs['jsx-runtime'].rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            '@next/next/no-img-element': 'off',
            'react-hooks/exhaustive-deps': 'off',
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: { '@typescript-eslint': typescript },
        languageOptions: { parser: parserTypescript },
        rules: {
            ...typescript.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            // '@typescript-eslint/no-explicit-any': ['warn'],
        },
    },
    {
        ...configPrettier,
    },
];

export default config;
