import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferArrowCallbackOption {
  allowNamedFunctions?: boolean;
  allowUnboundThis?: boolean;
}

/**
 * Options.
 */
export type PreferArrowCallbackOptions = [PreferArrowCallbackOption?];

/**
 * Require using arrow functions for callbacks.
 *
 * @see [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback)
 */
export type PreferArrowCallbackRuleConfig =
  RuleConfig<PreferArrowCallbackOptions>;

/**
 * Require using arrow functions for callbacks.
 *
 * @see [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback)
 */
export interface PreferArrowCallbackRule {
  /**
   * Require using arrow functions for callbacks.
   *
   * @see [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback)
   */
  'prefer-arrow-callback': PreferArrowCallbackRuleConfig;
}
