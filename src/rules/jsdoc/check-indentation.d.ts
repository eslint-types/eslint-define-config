import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CheckIndentationOption {
  excludeTags?: string[];
}

/**
 * Options.
 */
export type CheckIndentationOptions = [CheckIndentationOption?];

/**
 * Reports invalid padding inside JSDoc blocks.
 *
 * @see [check-indentation](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md#repos-sticky-header)
 */
export type CheckIndentationRuleConfig = RuleConfig<CheckIndentationOptions>;

/**
 * Reports invalid padding inside JSDoc blocks.
 *
 * @see [check-indentation](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md#repos-sticky-header)
 */
export interface CheckIndentationRule {
  /**
   * Reports invalid padding inside JSDoc blocks.
   *
   * @see [check-indentation](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md#repos-sticky-header)
   */
  'jsdoc/check-indentation': CheckIndentationRuleConfig;
}
