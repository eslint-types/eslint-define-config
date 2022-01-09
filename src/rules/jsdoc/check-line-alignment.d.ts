import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface CheckLineAlignmentConfig {
  customSpacings?: {
    postDelimiter?: number;
    postName?: number;
    postTag?: number;
    postType?: number;
  };
  preserveMainDescriptionPostDelimiter?: boolean;
  tags?: string[];
}

/**
 * Option.
 */
export type CheckLineAlignmentOption = 'always' | 'never';

/**
 * Options.
 */
export type CheckLineAlignmentOptions = [
  CheckLineAlignmentOption?,
  CheckLineAlignmentConfig?,
];

/**
 * Reports invalid alignment of JSDoc block lines.
 *
 * @see [check-line-alignment](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-line-alignment)
 */
export type CheckLineAlignmentRuleConfig =
  RuleConfig<CheckLineAlignmentOptions>;

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
