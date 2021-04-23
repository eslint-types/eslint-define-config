import type { LiteralUnion } from '../utility-types';
import type { EslintExtensions } from './eslint';
import type { ImportExtensions } from './eslint-plugin-import';
import type { JsdocExtensions } from './eslint-plugin-jsdoc';
import type { NodeExtensions } from './eslint-plugin-node';
import type { PrettierExtensions } from './eslint-plugin-prettier';
import type { VueExtensions } from './eslint-plugin-vue';
import type { TypescriptEslintExtensions } from './typescript-eslint';

/**
 * All known extensions.
 */
export type KnownExtensions = LiteralUnion<
  | EslintExtensions
  | TypescriptEslintExtensions
  | PrettierExtensions
  | NodeExtensions
  | ImportExtensions
  | JsdocExtensions
  | VueExtensions
>;

/**
 * Extending Configuration Files.
 *
 * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
 */
export type Extends = KnownExtensions | Array<KnownExtensions>;
