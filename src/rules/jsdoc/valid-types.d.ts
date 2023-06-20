import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ValidTypesOption {
  allowEmptyNamepaths?: boolean;
}

/**
 * Options.
 */
export type ValidTypesOptions = [ValidTypesOption?];

/**
 * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
 *
 * @see [valid-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header)
 */
export type ValidTypesRuleConfig = RuleConfig<ValidTypesOptions>;

/**
 * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
 *
 * @see [valid-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header)
 */
export interface ValidTypesRule {
  /**
   * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
   *
   * @see [valid-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header)
   */
  'jsdoc/valid-types': ValidTypesRuleConfig;
}
