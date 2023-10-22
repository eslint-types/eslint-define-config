import type { LiteralUnion } from '../../utility-types';

/**
 * This is a special exported interface for other packages to declare
 * additional extensions that should bail out for eslint extensions. For example
 * `'@typescript-eslint/eslint-plugin'` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'eslint-define-config' {
 *   export interface CustomExtends {
 *     'plugin:@typescript-eslint/all': void;
 *     'plugin:@typescript-eslint/base': void;
 *     'plugin:@typescript-eslint/disable-type-checked': void;
 *     'plugin:@typescript-eslint/eslint-recommended': void;
 *     'plugin:@typescript-eslint/recommended-type-checked': void;
 *     'plugin:@typescript-eslint/recommended': void;
 *     'plugin:@typescript-eslint/strict-type-checked': void;
 *     'plugin:@typescript-eslint/strict': void;
 *     'plugin:@typescript-eslint/stylistic-type-checked': void;
 *     'plugin:@typescript-eslint/stylistic': void;
 *   }
 * }
 * ```
 */
export interface CustomExtends {}

/**
 * All known extends.
 */
export type KnownExtends = LiteralUnion<
  | 'eslint:recommended'
  | 'eslint:all'
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  | keyof CustomExtends
>;

/**
 * Extending Configuration Files.
 *
 * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
 */
export type Extends = KnownExtends | KnownExtends[];
