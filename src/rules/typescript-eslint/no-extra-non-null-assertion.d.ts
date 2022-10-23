import type { RuleConfig } from '../rule-config';

/**
 * Disallow extra non-null assertions.
 *
 * @see [no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion)
 */
export type NoExtraNonNullAssertionRuleConfig = RuleConfig<[]>;

/**
 * Disallow extra non-null assertions.
 *
 * @see [no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion)
 */
export interface NoExtraNonNullAssertionRule {
  /**
   * Disallow extra non-null assertions.
   *
   * @see [no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion)
   */
  '@typescript-eslint/no-extra-non-null-assertion': NoExtraNonNullAssertionRuleConfig;
}
