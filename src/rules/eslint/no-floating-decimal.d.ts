import type { RuleConfig } from '../rule-config';

/**
 * Disallow leading or trailing decimal points in numeric literals.
 *
 * @see [no-floating-decimal](https://eslint.org/docs/latest/rules/no-floating-decimal)
 */
export type NoFloatingDecimalRuleConfig = RuleConfig<[]>;

/**
 * Disallow leading or trailing decimal points in numeric literals.
 *
 * @see [no-floating-decimal](https://eslint.org/docs/latest/rules/no-floating-decimal)
 */
export interface NoFloatingDecimalRule {
  /**
   * Disallow leading or trailing decimal points in numeric literals.
   *
   * @see [no-floating-decimal](https://eslint.org/docs/latest/rules/no-floating-decimal)
   */
  'no-floating-decimal': NoFloatingDecimalRuleConfig;
}
