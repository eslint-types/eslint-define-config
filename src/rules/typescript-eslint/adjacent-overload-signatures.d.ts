import type { RuleConfig } from '../rule-config';

/**
 * Require that member overloads be consecutive.
 *
 * @see [adjacent-overload-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md)
 */
export type AdjacentOverloadSignaturesRuleConfig = RuleConfig<[]>;

/**
 * Require that member overloads be consecutive.
 *
 * @see [adjacent-overload-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md)
 */
export interface AdjacentOverloadSignaturesRule {
  /**
   * Require that member overloads be consecutive.
   *
   * @see [adjacent-overload-signatures](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md)
   */
  '@typescript-eslint/adjacent-overload-signatures': AdjacentOverloadSignaturesRuleConfig;
}
