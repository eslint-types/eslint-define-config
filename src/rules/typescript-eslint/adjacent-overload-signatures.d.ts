import type { RuleConfig } from '../rule-config';

/**
 * Require that member overloads be consecutive.
 *
 * @see [adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures)
 */
export type AdjacentOverloadSignaturesRuleConfig = RuleConfig<[]>;

/**
 * Require that member overloads be consecutive.
 *
 * @see [adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures)
 */
export interface AdjacentOverloadSignaturesRule {
  /**
   * Require that member overloads be consecutive.
   *
   * @see [adjacent-overload-signatures](https://typescript-eslint.io/rules/adjacent-overload-signatures)
   */
  '@typescript-eslint/adjacent-overload-signatures': AdjacentOverloadSignaturesRuleConfig;
}
