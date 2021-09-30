import type { RuleConfig } from '../rule-config';

/**
 * Checks that `@access` tags have a valid value.
 *
 * @see [check-access](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access)
 */
export type CheckAccessRuleConfig = RuleConfig<[]>;

/**
 * Checks that `@access` tags have a valid value.
 *
 * @see [check-access](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access)
 */
export interface CheckAccessRule {
  /**
   * Checks that `@access` tags have a valid value.
   *
   * @see [check-access](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access)
   */
  'jsdoc/check-access': CheckAccessRuleConfig;
}
