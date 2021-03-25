import type { LiteralUnion } from '../utility-types';
import type { EslintExtensions } from './eslint';
import type { EslintPluginImportExtensions } from './eslint-plugin-import';
import type { EslintPluginJsdocExtensions } from './eslint-plugin-jsdoc';
import type { EslintPluginPrettierExtensions } from './eslint-plugin-prettier';
import type { TypescriptEslintExtensions } from './typescript-eslint';

/**
 * All known extensions.
 */
export type KnownExtensions = LiteralUnion<
  | EslintExtensions
  | TypescriptEslintExtensions
  | EslintPluginPrettierExtensions
  | EslintPluginImportExtensions
  | EslintPluginJsdocExtensions
>;

/**
 * Extending Configuration Files.
 *
 * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
 */
export type Extends = KnownExtensions | Array<KnownExtensions>;
