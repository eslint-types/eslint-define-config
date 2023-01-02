import type { RuleConfig } from '../rule-config';

/**
 * Disallow leading or trailing decimal points in numeric literals.
 *
 * @see [no-floating-decimal](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html)
 */
export type NoFloatingDecimalRuleConfig = RuleConfig<[]>;

/**
 * Disallow leading or trailing decimal points in numeric literals.
 *
 * @see [no-floating-decimal](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html)
 */
export interface NoFloatingDecimalRule {
  /**
   * Disallow leading or trailing decimal points in numeric literals.
   *
   * @see [no-floating-decimal](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html)
   */
  'jsonc/no-floating-decimal': NoFloatingDecimalRuleConfig;
}
