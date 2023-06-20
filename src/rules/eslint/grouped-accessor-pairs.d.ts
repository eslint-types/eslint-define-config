import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type GroupedAccessorPairsOption =
  | 'anyOrder'
  | 'getBeforeSet'
  | 'setBeforeGet';

/**
 * Options.
 */
export type GroupedAccessorPairsOptions = [GroupedAccessorPairsOption?];

/**
 * Require grouped accessor pairs in object literals and classes.
 *
 * @see [grouped-accessor-pairs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)
 */
export type GroupedAccessorPairsRuleConfig =
  RuleConfig<GroupedAccessorPairsOptions>;

/**
 * Require grouped accessor pairs in object literals and classes.
 *
 * @see [grouped-accessor-pairs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)
 */
export interface GroupedAccessorPairsRule {
  /**
   * Require grouped accessor pairs in object literals and classes.
   *
   * @see [grouped-accessor-pairs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)
   */
  'grouped-accessor-pairs': GroupedAccessorPairsRuleConfig;
}
