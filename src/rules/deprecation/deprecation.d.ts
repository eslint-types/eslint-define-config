import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Do not use deprecated APIs.
 *
 * @see [deprecation](https://github.com/gund/eslint-plugin-deprecation)
 */
export type DeprecationRuleConfig = RuleConfig<[]>;

/**
 * Do not use deprecated APIs.
 *
 * @see [deprecation](https://github.com/gund/eslint-plugin-deprecation)
 */
export interface DeprecationRule {
  /**
   * Do not use deprecated APIs.
   *
   * @see [deprecation](https://github.com/gund/eslint-plugin-deprecation)
   */
  'deprecation/deprecation': DeprecationRuleConfig;
}
