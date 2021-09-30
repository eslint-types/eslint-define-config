import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ValidTypesOption = {
  /**
   * @see [valid-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types)
   */
  allowEmptyNamepaths?: any;
};

/**
 * Options.
 */
export type ValidTypesOptions = [ValidTypesOption?];

/**
 * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
 *
 * @see [valid-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types)
 */
export type ValidTypesRuleConfig = RuleConfig<ValidTypesOptions>;

/**
 * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
 *
 * @see [valid-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types)
 */
export interface ValidTypesRule {
  /**
   * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
   *
   * @see [valid-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types)
   */
  'jsdoc/valid-types': ValidTypesRuleConfig;
}
