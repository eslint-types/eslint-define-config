import type { RuleConfig } from '../rule-config';

/**
 * Disallow mapping keys other than strings.
 *
 * @see [require-string-key](https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html)
 */
export type RequireStringKeyRuleConfig = RuleConfig<[]>;

/**
 * Disallow mapping keys other than strings.
 *
 * @see [require-string-key](https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html)
 */
export interface RequireStringKeyRule {
  /**
   * Disallow mapping keys other than strings.
   *
   * @see [require-string-key](https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html)
   */
  'yml/require-string-key': RequireStringKeyRuleConfig;
}
