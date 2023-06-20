import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireReturnsOption {
  checkConstructors?: boolean;
  checkGetters?: boolean;
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
        forceRequireReturn?: boolean;
      }
  )[];
  exemptedBy?: string[];
  forceRequireReturn?: boolean;
  forceReturnsWithAsync?: boolean;
}

/**
 * Options.
 */
export type RequireReturnsOptions = [RequireReturnsOption?];

/**
 * Requires that returns are documented.
 *
 * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md#repos-sticky-header)
 */
export type RequireReturnsRuleConfig = RuleConfig<RequireReturnsOptions>;

/**
 * Requires that returns are documented.
 *
 * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md#repos-sticky-header)
 */
export interface RequireReturnsRule {
  /**
   * Requires that returns are documented.
   *
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md#repos-sticky-header)
   */
  'jsdoc/require-returns': RequireReturnsRuleConfig;
}
