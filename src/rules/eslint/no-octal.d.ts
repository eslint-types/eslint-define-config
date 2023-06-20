import type { RuleConfig } from '../rule-config';

/**
 * Disallow octal literals.
 *
 * @see [no-octal](https://eslint.org/docs/latest/rules/no-octal)
 */
export type NoOctalRuleConfig = RuleConfig<[]>;

/**
 * Disallow octal literals.
 *
 * @see [no-octal](https://eslint.org/docs/latest/rules/no-octal)
 */
export interface NoOctalRule {
  /**
   * Disallow octal literals.
   *
   * @see [no-octal](https://eslint.org/docs/latest/rules/no-octal)
   */
  'no-octal': NoOctalRuleConfig;
}
