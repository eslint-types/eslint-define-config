import type { RuleConfig } from '../rule-config';

/**
 * Disallow empty mapping keys.
 *
 * @see [no-empty-key](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html)
 */
export type NoEmptyKeyRuleConfig = RuleConfig<[]>;

/**
 * Disallow empty mapping keys.
 *
 * @see [no-empty-key](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html)
 */
export interface NoEmptyKeyRule {
  /**
   * Disallow empty mapping keys.
   *
   * @see [no-empty-key](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html)
   */
  'yml/no-empty-key': NoEmptyKeyRuleConfig;
}
