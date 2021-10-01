import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireReturnsOption = {
  checkConstructors?: boolean;
  checkGetters?: boolean;
  contexts?: any[];
  exemptedBy?: string[];
  forceRequireReturn?: boolean;
  forceReturnsWithAsync?: boolean;
};

/**
 * Options.
 */
export type RequireReturnsOptions = [RequireReturnsOption?];

/**
 * Requires returns are documented.
 *
 * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
 */
export type RequireReturnsRuleConfig = RuleConfig<RequireReturnsOptions>;

/**
 * Requires returns are documented.
 *
 * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
 */
export interface RequireReturnsRule {
  /**
   * Requires returns are documented.
   *
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  'jsdoc/require-returns': RequireReturnsRuleConfig;
}
