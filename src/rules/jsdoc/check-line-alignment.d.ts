import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CheckLineAlignmentOption = 'always' | 'never';

/**
 * Options.
 */
export type CheckLineAlignmentOptions = [CheckLineAlignmentOption?];

/**
 * Reports invalid alignment of JSDoc block lines.
 *
 * @see [check-line-alignment](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-line-alignment)
 */
export type CheckLineAlignmentRuleConfig = RuleConfig<CheckLineAlignmentOptions>;

/**
 * Reports invalid alignment of JSDoc block lines.
 *
 * @see [check-line-alignment](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-line-alignment)
 */
export interface CheckLineAlignmentRule {
  /**
   * Reports invalid alignment of JSDoc block lines.
   *
   * @see [check-line-alignment](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-line-alignment)
   */
  'jsdoc/check-line-alignment': CheckLineAlignmentRuleConfig;
}
