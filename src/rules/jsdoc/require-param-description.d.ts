import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireParamDescriptionOption = {
  /**
   * @see [require-param-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description)
   */
  contexts?: any;
};

/**
 * Options.
 */
export type RequireParamDescriptionOptions = [RequireParamDescriptionOption?];

/**
 * Requires that each `@param` tag has a `description` value.
 *
 * @see [require-param-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description)
 */
export type RequireParamDescriptionRuleConfig = RuleConfig<RequireParamDescriptionOptions>;

/**
 * Requires that each `@param` tag has a `description` value.
 *
 * @see [require-param-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description)
 */
export interface RequireParamDescriptionRule {
  /**
   * Requires that each `@param` tag has a `description` value.
   *
   * @see [require-param-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description)
   */
  'jsdoc/require-param-description': RequireParamDescriptionRuleConfig;
}
