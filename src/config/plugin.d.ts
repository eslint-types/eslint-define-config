import type { LiteralUnion } from '../utility-types';

/** Plugin. */
export type Plugin = LiteralUnion<
  | '@graphql-eslint'
  | '@typescript-eslint'
  | 'deprecation'
  | 'import'
  | 'inclusive-language'
  | 'jsdoc'
  | 'mdx'
  | 'prettier'
  | 'promise'
  | 'sonarjs'
  | 'spellcheck'
  | 'unicorn'
  | 'vue'
>;
