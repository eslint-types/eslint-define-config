import type { LiteralUnion } from './utility-types';

/** Plugin. */
export type Plugin = LiteralUnion<
  '@typescript-eslint' | 'prettier' | 'import' | 'jsdoc' | 'spellcheck' | 'inclusive-language'
>;
