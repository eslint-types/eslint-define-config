// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  ignorePatterns: ['src/index.js', '.eslintrc.js'],
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    warnOnUnsupportedTypeScriptVersion: false
  },
  plugins: ['@typescript-eslint', 'prettier', 'jsdoc', 'spellcheck', 'inclusive-language'],
  rules: {
    curly: ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-case-declarations': 'warn',
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-readonly': ['warn'],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/typedef': ['warn', { memberVariableDeclaration: true, variableDeclaration: true }],

    'jsdoc/match-description': [
      'warn',
      {
        mainDescription: '/^[A-Z`].+?(\\.|:)(\\n\\n.*((\\n{1,2}- .+)|(_.+_)|`.+`|\\n\\n---))?$/us',
        matchDescription: '^[A-Z`].+(\\.|`.+`)$',
        contexts: ['any'],
        tags: {
          param: true,
          returns: true
        }
      }
    ],
    'jsdoc/no-types': 'error',
    'jsdoc/require-jsdoc': [
      'warn',
      {
        contexts: [
          'ClassDeclaration',
          "ClassProperty:not([accessibility='private'])",
          'ExportNamedDeclaration:has(VariableDeclaration)',
          'FunctionExpression',
          "MethodDefinition:not([accessibility='private']) > FunctionExpression",
          'TSEnumDeclaration',
          'TSInterfaceDeclaration',
          'TSMethodSignature',
          // 'TSPropertySignature',
          'TSTypeAliasDeclaration'
        ]
      }
    ],
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',

    'spellcheck/spell-checker': [
      'warn',
      {
        minLength: 3,
        skipWords: [
          'accessor',
          'accessors',
          'amd',
          'applescript',
          'argv',
          'asyncgenerator',
          'asynciterable',
          'atomtest',
          'backtick',
          'backticks',
          'browserify',
          'cjs',
          'commonjs',
          'declarator',
          'denylist',
          'dom',
          'ecma',
          'embertest',
          'esm',
          'esnext',
          'getters',
          'globals',
          'greasemonkey',
          'inferrable',
          'jsdoc',
          'jsx',
          'lang',
          'len',
          'linebreak',
          'loc',
          'multiline',
          'nashorn',
          'nocheck',
          'nullish',
          'phantomjs',
          'pragma',
          'prototypejs',
          'readonly',
          'scripthost',
          'sharedmemory',
          'tsconfig',
          'typedarrays',
          'unix',
          'urls',
          'vue',
          'webextensions',
          'webworker',
          'wellknown',
          'whitespace',
          'writeable'
        ]
      }
    ],

    'inclusive-language/use-inclusive-words': [
      'warn',
      {
        allowedTerms: [
          {
            term: '/master',
            allowPartialMatches: true
          }
        ],
        words: [
          {
            word: 'guys',
            suggestions: ['folks']
          }
        ]
      }
    ]
  },
  settings: {
    jsdoc: {
      mode: 'typescript'
    }
  }
});
