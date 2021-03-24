import type { LiteralUnion } from '../utility-types';
import type { EslintExtensions } from './eslint';

/**
 * All known extensions.
 */
export type KnownExtensions = LiteralUnion<EslintExtensions>;

/**
 * Extending Configuration Files.
 *
 * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
 */
export type Extends = KnownExtensions | Array<KnownExtensions>;
