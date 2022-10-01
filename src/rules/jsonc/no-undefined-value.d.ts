import type { RuleConfig } from '../rule-config';

/**
 * Disallow `undefined`.
 *
 * @see [no-undefined-value](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html)
 */
export type NoUndefinedValueRuleConfig = RuleConfig<[]>;

/**
 * Disallow `undefined`.
 *
 * @see [no-undefined-value](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html)
 */
export interface NoUndefinedValueRule {
  /**
   * Disallow `undefined`.
   *
   * @see [no-undefined-value](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html)
   */
  'jsonc/no-undefined-value': NoUndefinedValueRuleConfig;
}
