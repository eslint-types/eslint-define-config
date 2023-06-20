import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MaxNestedCallbacksOption =
  | number
  | {
      maximum?: number;
      max?: number;
    };

/**
 * Options.
 */
export type MaxNestedCallbacksOptions = [MaxNestedCallbacksOption?];

/**
 * Enforce a maximum depth that callbacks can be nested.
 *
 * @see [max-nested-callbacks](https://eslint.org/docs/latest/rules/max-nested-callbacks)
 */
export type MaxNestedCallbacksRuleConfig =
  RuleConfig<MaxNestedCallbacksOptions>;

/**
 * Enforce a maximum depth that callbacks can be nested.
 *
 * @see [max-nested-callbacks](https://eslint.org/docs/latest/rules/max-nested-callbacks)
 */
export interface MaxNestedCallbacksRule {
  /**
   * Enforce a maximum depth that callbacks can be nested.
   *
   * @see [max-nested-callbacks](https://eslint.org/docs/latest/rules/max-nested-callbacks)
   */
  'max-nested-callbacks': MaxNestedCallbacksRuleConfig;
}
