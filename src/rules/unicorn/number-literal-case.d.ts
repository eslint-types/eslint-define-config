import type { RuleConfig } from '../rule-config';

/**
 * Enforce proper case for numeric literals.
 *
 * @see [number-literal-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/number-literal-case.md)
 */
export type NumberLiteralCaseRuleConfig = RuleConfig<[]>;

/**
 * Enforce proper case for numeric literals.
 *
 * @see [number-literal-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/number-literal-case.md)
 */
export interface NumberLiteralCaseRule {
  /**
   * Enforce proper case for numeric literals.
   *
   * @see [number-literal-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/number-literal-case.md)
   */
  'unicorn/number-literal-case': NumberLiteralCaseRuleConfig;
}
