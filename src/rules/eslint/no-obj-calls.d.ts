import type { RuleConfig } from '../rule-config';

/**
 * Disallow calling global object properties as functions.
 *
 * @see [no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls)
 */
export type NoObjCallsRuleConfig = RuleConfig<[]>;

/**
 * Disallow calling global object properties as functions.
 *
 * @see [no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls)
 */
export interface NoObjCallsRule {
  /**
   * Disallow calling global object properties as functions.
   *
   * @see [no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls)
   */
  'no-obj-calls': NoObjCallsRuleConfig;
}
