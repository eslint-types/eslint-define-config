import type { RuleConfig } from '../rule-config';

/**
 * Reports invalid alignment of JSDoc block asterisks.
 *
 * @see [check-alignment](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header)
 */
export type CheckAlignmentRuleConfig = RuleConfig<[]>;

/**
 * Reports invalid alignment of JSDoc block asterisks.
 *
 * @see [check-alignment](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header)
 */
export interface CheckAlignmentRule {
  /**
   * Reports invalid alignment of JSDoc block asterisks.
   *
   * @see [check-alignment](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header)
   */
  'jsdoc/check-alignment': CheckAlignmentRuleConfig;
}
