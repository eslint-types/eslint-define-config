import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface RequireHyphenBeforeParamDescriptionConfig {
  tags?:
    | {
        /**
         */
        [k: string]: 'always' | 'never';
      }
    | 'any';
}

/**
 * Option.
 */
export type RequireHyphenBeforeParamDescriptionOption = 'always' | 'never';

/**
 * Options.
 */
export type RequireHyphenBeforeParamDescriptionOptions = [
  RequireHyphenBeforeParamDescriptionOption?,
  RequireHyphenBeforeParamDescriptionConfig?,
];

/**
 * Requires a hyphen before the `@param` description.
 *
 * @see [require-hyphen-before-param-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header)
 */
export type RequireHyphenBeforeParamDescriptionRuleConfig =
  RuleConfig<RequireHyphenBeforeParamDescriptionOptions>;

/**
 * Requires a hyphen before the `@param` description.
 *
 * @see [require-hyphen-before-param-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header)
 */
export interface RequireHyphenBeforeParamDescriptionRule {
  /**
   * Requires a hyphen before the `@param` description.
   *
   * @see [require-hyphen-before-param-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header)
   */
  'jsdoc/require-hyphen-before-param-description': RequireHyphenBeforeParamDescriptionRuleConfig;
}
