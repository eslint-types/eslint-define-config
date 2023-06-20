import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface CheckLineAlignmentConfig {
  customSpacings?: {
    postDelimiter?: number;
    postHyphen?: number;
    postName?: number;
    postTag?: number;
    postType?: number;
  };
  preserveMainDescriptionPostDelimiter?: boolean;
  tags?: string[];
  wrapIndent?: string;
}

/**
 * Option.
 */
export type CheckLineAlignmentOption = 'always' | 'never' | 'any';

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
 * @see [check-line-alignment](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md#repos-sticky-header)
 */
export type CheckLineAlignmentRuleConfig =
  RuleConfig<CheckLineAlignmentOptions>;

/**
 * Reports invalid alignment of JSDoc block lines.
 *
 * @see [check-line-alignment](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md#repos-sticky-header)
 */
export interface CheckLineAlignmentRule {
  /**
   * Reports invalid alignment of JSDoc block lines.
   *
   * @see [check-line-alignment](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md#repos-sticky-header)
   */
  'jsdoc/check-line-alignment': CheckLineAlignmentRuleConfig;
}
