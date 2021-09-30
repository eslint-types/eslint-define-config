import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CheckIndentationOption = {
  /**
   * @see [check-indentation](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation)
   */
  excludeTags?: any;
};

/**
 * Options.
 */
export type CheckIndentationOptions = [CheckIndentationOption?];

/**
 * Reports invalid padding inside JSDoc blocks.
 *
 * @see [check-indentation](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation)
 */
export type CheckIndentationRuleConfig = RuleConfig<CheckIndentationOptions>;

/**
 * Reports invalid padding inside JSDoc blocks.
 *
 * @see [check-indentation](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation)
 */
export interface CheckIndentationRule {
  /**
   * Reports invalid padding inside JSDoc blocks.
   *
   * @see [check-indentation](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation)
   */
  'jsdoc/check-indentation': CheckIndentationRuleConfig;
}
