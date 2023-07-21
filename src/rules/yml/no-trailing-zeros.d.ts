import type { RuleConfig } from '../rule-config';

/**
 * Disallow trailing zeros for floats.
 *
 * @see [no-trailing-zeros](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-trailing-zeros.html)
 */
export type NoTrailingZerosRuleConfig = RuleConfig<[]>;

/**
 * Disallow trailing zeros for floats.
 *
 * @see [no-trailing-zeros](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-trailing-zeros.html)
 */
export interface NoTrailingZerosRule {
  /**
   * Disallow trailing zeros for floats.
   *
   * @see [no-trailing-zeros](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-trailing-zeros.html)
   */
  'yml/no-trailing-zeros': NoTrailingZerosRuleConfig;
}
