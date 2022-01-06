import type { RuleConfig } from '../rule-config';

/**
 * Exhaustiveness checking in switch with union type.
 *
 * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
 */
export type SwitchExhaustivenessCheckRuleConfig = RuleConfig<[]>;

/**
 * Exhaustiveness checking in switch with union type.
 *
 * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
 */
export interface SwitchExhaustivenessCheckRule {
  /**
   * Exhaustiveness checking in switch with union type.
   *
   * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
   */
  '@typescript-eslint/switch-exhaustiveness-check': SwitchExhaustivenessCheckRuleConfig;
}
