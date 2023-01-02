import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of `Math.trunc` instead of bitwise operators.
 *
 * @see [prefer-math-trunc](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-math-trunc.md)
 */
export type PreferMathTruncRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of `Math.trunc` instead of bitwise operators.
 *
 * @see [prefer-math-trunc](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-math-trunc.md)
 */
export interface PreferMathTruncRule {
  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   *
   * @see [prefer-math-trunc](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-math-trunc.md)
   */
  'unicorn/prefer-math-trunc': PreferMathTruncRuleConfig;
}
