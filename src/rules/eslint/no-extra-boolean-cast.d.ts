import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExtraBooleanCastOption {
  enforceForLogicalOperands?: boolean;
}

/**
 * Options.
 */
export type NoExtraBooleanCastOptions = [NoExtraBooleanCastOption?];

/**
 * Disallow unnecessary boolean casts.
 *
 * @see [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)
 */
export type NoExtraBooleanCastRuleConfig =
  RuleConfig<NoExtraBooleanCastOptions>;

/**
 * Disallow unnecessary boolean casts.
 *
 * @see [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)
 */
export interface NoExtraBooleanCastRule {
  /**
   * Disallow unnecessary boolean casts.
   *
   * @see [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)
   */
  'no-extra-boolean-cast': NoExtraBooleanCastRuleConfig;
}
