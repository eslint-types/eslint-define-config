import type { LiteralUnion } from '../utility-types';
import type { EslintExtensions } from './eslint';
import type { TypescriptEslintExtensions } from './typescript-eslint';

/**
 * All known extensions.
 */
export type KnownExtensions = LiteralUnion<EslintExtensions | TypescriptEslintExtensions>;

/**
 * Extending Configuration Files.
 *
 * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
 */
export type Extends = KnownExtensions | Array<KnownExtensions>;
