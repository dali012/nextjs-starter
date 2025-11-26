/* eslint-disable prettier/prettier */
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import checkFilePlugin from 'eslint-plugin-check-file';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: { prettier: prettierPlugin, 'check-file': checkFilePlugin },
    rules: {
      'prettier/prettier': 'error',
      'quotes': ['error', 'single'],
      'semi': ['error'],
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
      "check-file/no-index": "error",
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx}": "KEBAB_CASE"
        },
        {
          "ignoreMiddleExtensions": true
        }
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**": "NEXT_JS_APP_ROUTER_CASE"
        }
      ]
    },
  },
  prettierConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
