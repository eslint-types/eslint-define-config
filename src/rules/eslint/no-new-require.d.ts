import type { RuleConfig } from '../rule-config';

/**
 * Disallow `new` operators with calls to `require`.
 *
 * @deprecated
 *
 * @see [no-new-require](https://eslint.org/docs/latest/rules/no-new-require)
 */
export type NoNewRequireRuleConfig = RuleConfig<[]>;

/**
 * Disallow `new` operators with calls to `require`.
 *
 * @deprecated
 *
 * @see [no-new-require](https://eslint.org/docs/latest/rules/no-new-require)
 */
export interface NoNewRequireRule {
  /**
   * Disallow `new` operators with calls to `require`.
   *
   * @deprecated
   *
   * @see [no-new-require](https://eslint.org/docs/latest/rules/no-new-require)
   */
  'no-new-require': NoNewRequireRuleConfig;
}
