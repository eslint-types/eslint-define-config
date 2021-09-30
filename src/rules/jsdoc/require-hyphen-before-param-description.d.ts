import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireHyphenBeforeParamDescriptionOption = 'always' | 'never';

/**
 * Options.
 */
export type RequireHyphenBeforeParamDescriptionOptions = [RequireHyphenBeforeParamDescriptionOption?];

/**
 * Requires a hyphen before the `@param` description.
 *
 * @see [require-hyphen-before-param-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description)
 */
export type RequireHyphenBeforeParamDescriptionRuleConfig = RuleConfig<RequireHyphenBeforeParamDescriptionOptions>;

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
