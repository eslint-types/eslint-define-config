import type { LiteralUnion } from '../utility-types';

/**
 * This is a special exported interface for other packages to declare
 * additional plugins that should bail out for eslint plugins. For example
 * `'@typescript-eslint/eslint-plugin'` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'eslint-define-config' {
 *   export interface CustomPlugins {
 *     '@typescript-eslint': void;
 *   }
 * }
 * ```
 */
export interface CustomPlugins {}

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
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  | keyof CustomPlugins
>;
