import type { RuleConfig } from '../rule-config';

/**
 * Disallow legacy octal literals.
 *
 * @see [no-octal](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html)
 */
export type NoOctalRuleConfig = RuleConfig<[]>;

/**
 * Disallow legacy octal literals.
 *
 * @see [no-octal](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html)
 */
export interface NoOctalRule {
  /**
   * Disallow legacy octal literals.
   *
   * @see [no-octal](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html)
   */
  'jsonc/no-octal': NoOctalRuleConfig;
}
