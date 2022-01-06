import type { RuleConfig } from '../rule-config';

/**
 * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
 *
 * @see [unified-signatures](https://typescript-eslint.io/rules/unified-signatures)
 */
export type UnifiedSignaturesRuleConfig = RuleConfig<[]>;

/**
 * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
 *
 * @see [unified-signatures](https://typescript-eslint.io/rules/unified-signatures)
 */
export interface UnifiedSignaturesRule {
  /**
   * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
   *
   * @see [unified-signatures](https://typescript-eslint.io/rules/unified-signatures)
   */
  '@typescript-eslint/unified-signatures': UnifiedSignaturesRuleConfig;
}
