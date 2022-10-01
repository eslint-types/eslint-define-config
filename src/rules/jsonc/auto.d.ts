import type { RuleConfig } from '../rule-config';

/**
 * Apply jsonc rules similar to your configured ESLint core rules.
 *
 * @see [auto](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html)
 */
export type AutoRuleConfig = RuleConfig<[]>;

/**
 * Apply jsonc rules similar to your configured ESLint core rules.
 *
 * @see [auto](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html)
 */
export interface AutoRule {
  /**
   * Apply jsonc rules similar to your configured ESLint core rules.
   *
   * @see [auto](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html)
   */
  'jsonc/auto': AutoRuleConfig;
}
