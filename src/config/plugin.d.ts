import type { LiteralUnion } from '../utility-types';

/** Plugin. */
export type Plugin = LiteralUnion<
  | '@graphql-eslint'
  | '@typescript-eslint'
  | 'deprecation'
  | 'import'
  | 'inclusive-language'
  | 'jsdoc'
  | 'jsx-a11y'
  | 'mdx'
  | 'prettier'
  | 'promise'
  | 'react-hooks'
  | 'react'
  | 'sonarjs'
  | 'spellcheck'
  | 'testing-library'
  | 'unicorn'
  | 'vitest'
  | 'vue'
>;
