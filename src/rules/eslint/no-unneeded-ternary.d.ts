import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnneededTernaryOption {
  defaultAssignment?: boolean;
}

/**
 * Options.
 */
export type NoUnneededTernaryOptions = [NoUnneededTernaryOption?];

/**
 * Disallow ternary operators when simpler alternatives exist.
 *
 * @see [no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary)
 */
export type NoUnneededTernaryRuleConfig = RuleConfig<NoUnneededTernaryOptions>;

/**
 * Disallow ternary operators when simpler alternatives exist.
 *
 * @see [no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary)
 */
export interface NoUnneededTernaryRule {
  /**
   * Disallow ternary operators when simpler alternatives exist.
   *
   * @see [no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary)
   */
  'no-unneeded-ternary': NoUnneededTernaryRuleConfig;
}
