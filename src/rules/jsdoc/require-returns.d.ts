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
 * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
 */
export type RequireReturnsRuleConfig = RuleConfig<RequireReturnsOptions>;

/**
 * Requires that returns are documented.
 *
 * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
 */
export interface RequireReturnsRule {
  /**
   * Requires that returns are documented.
   *
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  'jsdoc/require-returns': RequireReturnsRuleConfig;
}
