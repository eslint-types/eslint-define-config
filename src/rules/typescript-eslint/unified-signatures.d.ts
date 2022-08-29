import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface UnifiedSignaturesOption {
  /**
   * Whether two parameters with different names at the same index should be considered different even if their types are the same.
   */
  ignoreDifferentlyNamedParameters?: boolean;
}

/**
 * Options.
 */
export type UnifiedSignaturesOptions = [UnifiedSignaturesOption?];

/**
 * Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
 *
 * @see [unified-signatures](https://typescript-eslint.io/rules/unified-signatures)
 */
export type UnifiedSignaturesRuleConfig = RuleConfig<UnifiedSignaturesOptions>;

/**
 * Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
 *
 * @see [unified-signatures](https://typescript-eslint.io/rules/unified-signatures)
 */
export interface UnifiedSignaturesRule {
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
   *
   * @see [unified-signatures](https://typescript-eslint.io/rules/unified-signatures)
   */
  '@typescript-eslint/unified-signatures': UnifiedSignaturesRuleConfig;
}
