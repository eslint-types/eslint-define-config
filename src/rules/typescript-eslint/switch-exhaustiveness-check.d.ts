import type { RuleConfig } from '../rule-config';

/**
 * Require switch-case statements to be exhaustive with union type.
 *
 * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
 */
export type SwitchExhaustivenessCheckRuleConfig = RuleConfig<[]>;

/**
 * Require switch-case statements to be exhaustive with union type.
 *
 * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
 */
export interface SwitchExhaustivenessCheckRule {
  /**
   * Require switch-case statements to be exhaustive with union type.
   *
   * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
   */
  '@typescript-eslint/switch-exhaustiveness-check': SwitchExhaustivenessCheckRuleConfig;
}
