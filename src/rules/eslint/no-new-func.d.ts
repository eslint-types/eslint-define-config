import type { RuleConfig } from '../rule-config';

/**
 * Disallow `new` operators with the `Function` object.
 *
 * @see [no-new-func](https://eslint.org/docs/latest/rules/no-new-func)
 */
export type NoNewFuncRuleConfig = RuleConfig<[]>;

/**
 * Disallow `new` operators with the `Function` object.
 *
 * @see [no-new-func](https://eslint.org/docs/latest/rules/no-new-func)
 */
export interface NoNewFuncRule {
  /**
   * Disallow `new` operators with the `Function` object.
   *
   * @see [no-new-func](https://eslint.org/docs/latest/rules/no-new-func)
   */
  'no-new-func': NoNewFuncRuleConfig;
}
