import type { LiteralUnion } from './utility-types';

/** Plugin. */
export type Plugin = LiteralUnion<
  | '@typescript-eslint'
  | 'import'
  | 'inclusive-language'
  | 'jsdoc'
  | 'mdx'
  | 'prettier'
  | 'spellcheck'
  | 'unicorn'
  | 'vue'
>;
