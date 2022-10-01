import type { RuleConfig } from '../rule-config';

/**
 * Disallow multiline strings.
 *
 * @see [no-multi-str](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html)
 */
export type NoMultiStrRuleConfig = RuleConfig<[]>;

/**
 * Disallow multiline strings.
 *
 * @see [no-multi-str](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html)
 */
export interface NoMultiStrRule {
  /**
   * Disallow multiline strings.
   *
   * @see [no-multi-str](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html)
   */
  'jsonc/no-multi-str': NoMultiStrRuleConfig;
}
