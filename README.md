<p>
  <a href="https://www.npmjs.com/package/eslint-define-config" target="_blank">
    <img alt="NPM package" src="https://img.shields.io/npm/v/eslint-define-config.svg">
  </a>
  <a href="https://www.npmjs.com/package/eslint-define-config" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dt/eslint-define-config.svg">
  </a>
  <a href="https://github.com/eslint-types/eslint-define-config/actions/workflows/ci.yml">
    <img alt="Build Status" src="https://github.com/eslint-types/eslint-define-config/actions/workflows/ci.yml/badge.svg?branch=main">
  </a>
  <a href="https://github.com/eslint-types/eslint-define-config/blob/main/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/github/license/eslint-types/eslint-define-config.svg">
  </a>
  <a href="https://prettier.io" target="_blank">
    <img alt="Code Style: Prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
  </a>
  <a href="https://www.paypal.com/donate?hosted_button_id=L7GY729FBKTZY" target="_blank">
    <img alt="Donate: PayPal" src="https://img.shields.io/badge/Donate-PayPal-blue.svg">
  </a>
</p>

# eslint-define-config

Provide a `defineConfig` function for `.eslintrc.js`, and a `defineFlatConfig` function for `eslint.config.js` files.

# Installation

```bash
# add eslint and eslint-define-config to project’s dev dependencies
npm add --save-dev eslint eslint-define-config
# or
yarn add --dev eslint eslint-define-config
# or
pnpm add --save-dev eslint eslint-define-config
```

# Usage

By default only `eslint`'s rules are supported. To activate auto-suggestions for Rules of specific plugins, you need to install the respective types for that plugin.  
Plugins can either support their own types, or they could be supported by the community in the [`@eslint-types`](https://github.com/eslint-types/define-config-plugin-types) repository.

A list of community supported plugins can be found [here](https://www.npmjs.com/org/eslint-types).

`.eslintrc.js`

```ts
// @ts-check
const { defineConfig } = require('eslint-define-config');

/// <reference types="@eslint-types/typescript-eslint" />

module.exports = defineConfig({
  root: true,
  rules: {
    // rules...
  },
});
```

## Flat Config

`eslint.config.js`

```ts
// @ts-check
const { defineFlatConfig } = require('eslint-define-config');

/// <reference types="@eslint-types/typescript-eslint" />

module.exports = defineFlatConfig([
  'eslint:recommended',
  {
    plugins: {
      // plugins...
    },
    rules: {
      // rules...
    },
  },
]);
```

# Why?

Improve your eslint configuration experience with:

- auto-suggestions
- type checking (Use `// @ts-check` at the first line in your `.eslintrc.js` or `eslint.config.js`)
- documentation
- deprecation warnings

<img src="https://user-images.githubusercontent.com/7195563/112484789-8a416480-8d7a-11eb-9337-d8b5bc16de17.png" alt="Image" width="600px"/>

## Video

_Click on the thumbnail to play the video_

<a href="https://user-images.githubusercontent.com/7195563/112726158-4a19e780-8f1c-11eb-8cc6-4ea6c100137f.mp4" target="_blank">
  <img src="https://user-images.githubusercontent.com/7195563/112726343-30c56b00-8f1d-11eb-9b92-260c530caf1b.png" alt="Video" width="600px"/>
</a>

## Want to support your own plugin?

:warning: **This feature is very new and requires the support of the respective plugin owners**

Add a `declare module` to your plugin package like this:

```ts
declare module 'eslint-define-config' {
  export interface CustomRuleOptions {
    /**
     * Require consistently using either `T[]` or `Array<T>` for arrays.
     *
     * @see [array-type](https://typescript-eslint.io/rules/array-type)
     */
    '@typescript-eslint/array-type': [
      {
        default?: 'array' | 'generic' | 'array-simple';
        readonly?: 'array' | 'generic' | 'array-simple';
      },
    ];

    // ... more Rules
  }
}
```

There are other interfaces that can be extended.

- `CustomExtends`
- `CustomParserOptions`
- `CustomParsers`
- `CustomPlugins`
- `CustomSettings`

# Credits

- [Proposal Idea](https://github.com/eslint/eslint/issues/14249)
- [Vite](https://github.com/vitejs/vite) and [Evan You](https://github.com/yyx990803) for the idea
- [@antfu](https://github.com/antfu) and his [tweet](https://twitter.com/antfu7/status/1365907188338753536)
