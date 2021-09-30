import type { RuleConfig } from '../rule-config';

/**
 * Reports invalid alignment of JSDoc block asterisks.
 *
 * @see [check-alignment](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment)
 */
export type CheckAlignmentRuleConfig = RuleConfig<[]>;

/**
 * Reports invalid alignment of JSDoc block asterisks.
 *
 * @see [check-alignment](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment)
 */
export interface CheckAlignmentRule {
  /**
   * Reports invalid alignment of JSDoc block asterisks.
   *
   * @see [check-alignment](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment)
   */
  'jsdoc/check-alignment': CheckAlignmentRuleConfig;
}
