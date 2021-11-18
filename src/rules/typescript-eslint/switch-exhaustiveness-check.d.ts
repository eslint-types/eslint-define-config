import type { RuleConfig } from '../rule-config';

/**
 * Exhaustiveness checking in switch with union type.
 *
 * @see [switch-exhaustiveness-check](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md)
 */
export type SwitchExhaustivenessCheckRuleConfig = RuleConfig<[]>;

/**
 * Exhaustiveness checking in switch with union type.
 *
 * @see [switch-exhaustiveness-check](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md)
 */
export interface SwitchExhaustivenessCheckRule {
  /**
   * Exhaustiveness checking in switch with union type.
   *
   * @see [switch-exhaustiveness-check](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md)
   */
  '@typescript-eslint/switch-exhaustiveness-check': SwitchExhaustivenessCheckRuleConfig;
}
