import type { RuleConfig } from '../rule-config';

/**
 * Disallow numeric separators.
 *
 * @see [no-numeric-separators](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html)
 */
export type NoNumericSeparatorsRuleConfig = RuleConfig<[]>;

/**
 * Disallow numeric separators.
 *
 * @see [no-numeric-separators](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html)
 */
export interface NoNumericSeparatorsRule {
  /**
   * Disallow numeric separators.
   *
   * @see [no-numeric-separators](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html)
   */
  'jsonc/no-numeric-separators': NoNumericSeparatorsRuleConfig;
}
