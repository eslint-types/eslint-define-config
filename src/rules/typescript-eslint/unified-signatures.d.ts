import type { RuleConfig } from '../rule-config';

/**
 * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
 *
 * @see [unified-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/unified-signatures.md)
 */
export type UnifiedSignaturesRuleConfig = RuleConfig<[]>;

/**
 * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
 *
 * @see [unified-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/unified-signatures.md)
 */
export interface UnifiedSignaturesRule {
  /**
   * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
   *
   * @see [unified-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/unified-signatures.md)
   */
  '@typescript-eslint/unified-signatures': UnifiedSignaturesRuleConfig;
}
