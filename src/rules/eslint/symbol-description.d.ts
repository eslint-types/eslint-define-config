import type { RuleConfig } from '../rule-config';

/**
 * Require symbol descriptions.
 *
 * @see [symbol-description](https://eslint.org/docs/rules/symbol-description)
 */
export type SymbolDescriptionRuleConfig = RuleConfig<[]>;

/**
 * Require symbol descriptions.
 *
 * @see [symbol-description](https://eslint.org/docs/rules/symbol-description)
 */
export interface SymbolDescriptionRule {
  /**
   * Require symbol descriptions.
   *
   * @see [symbol-description](https://eslint.org/docs/rules/symbol-description)
   */
  'symbol-description': SymbolDescriptionRuleConfig;
}
