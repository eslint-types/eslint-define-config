import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary escape usage.
 *
 * @see [no-useless-escape](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html)
 */
export type NoUselessEscapeRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary escape usage.
 *
 * @see [no-useless-escape](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html)
 */
export interface NoUselessEscapeRule {
  /**
   * Disallow unnecessary escape usage.
   *
   * @see [no-useless-escape](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html)
   */
  'jsonc/no-useless-escape': NoUselessEscapeRuleConfig;
}
