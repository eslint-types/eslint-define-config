import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MultilineTernaryOption = 'always' | 'always-multiline' | 'never';

/**
 * Options.
 */
export type MultilineTernaryOptions = [MultilineTernaryOption?];

/**
 * Enforce newlines between operands of ternary expressions.
 *
 * @see [multiline-ternary](https://eslint.org/docs/latest/rules/multiline-ternary)
 */
export type MultilineTernaryRuleConfig = RuleConfig<MultilineTernaryOptions>;

/**
 * Enforce newlines between operands of ternary expressions.
 *
 * @see [multiline-ternary](https://eslint.org/docs/latest/rules/multiline-ternary)
 */
export interface MultilineTernaryRule {
  /**
   * Enforce newlines between operands of ternary expressions.
   *
   * @see [multiline-ternary](https://eslint.org/docs/latest/rules/multiline-ternary)
   */
  'multiline-ternary': MultilineTernaryRuleConfig;
}
