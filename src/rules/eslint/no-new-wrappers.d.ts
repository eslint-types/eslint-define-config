import type { RuleConfig } from '../rule-config';

/**
 * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
 *
 * @see [no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers)
 */
export type NoNewWrappersRuleConfig = RuleConfig<[]>;

/**
 * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
 *
 * @see [no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers)
 */
export interface NoNewWrappersRule {
  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
   *
   * @see [no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers)
   */
  'no-new-wrappers': NoNewWrappersRuleConfig;
}
