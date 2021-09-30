import type { RuleConfig } from '../rule-config';

/**
 * Requires a hyphen before the `@param` description.
 *
 * @see [require-hyphen-before-param-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description)
 */
export type RequireHyphenBeforeParamDescriptionRuleConfig = RuleConfig<[]>;

/**
 * Requires a hyphen before the `@param` description.
 *
 * @see [require-hyphen-before-param-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description)
 */
export interface RequireHyphenBeforeParamDescriptionRule {
  /**
   * Requires a hyphen before the `@param` description.
   *
   * @see [require-hyphen-before-param-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description)
   */
  'jsdoc/require-hyphen-before-param-description': RequireHyphenBeforeParamDescriptionRuleConfig;
}
