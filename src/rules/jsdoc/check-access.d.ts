import type { RuleConfig } from '../rule-config';

/**
 * Checks that `@access` tags have a valid value.
 *
 * @see [check-access](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header)
 */
export type CheckAccessRuleConfig = RuleConfig<[]>;

/**
 * Checks that `@access` tags have a valid value.
 *
 * @see [check-access](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header)
 */
export interface CheckAccessRule {
  /**
   * Checks that `@access` tags have a valid value.
   *
   * @see [check-access](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header)
   */
  'jsdoc/check-access': CheckAccessRuleConfig;
}
