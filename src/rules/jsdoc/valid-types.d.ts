import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ValidTypesOption {
  allowEmptyNamepaths?: boolean;
  [k: string]: any;
}

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
