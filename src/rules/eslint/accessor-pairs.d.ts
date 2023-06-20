import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AccessorPairsOption {
  getWithoutSet?: boolean;
  setWithoutGet?: boolean;
  enforceForClassMembers?: boolean;
}

/**
 * Options.
 */
export type AccessorPairsOptions = [AccessorPairsOption?];

/**
 * Enforce getter and setter pairs in objects and classes.
 *
 * @see [accessor-pairs](https://eslint.org/docs/latest/rules/accessor-pairs)
 */
export type AccessorPairsRuleConfig = RuleConfig<AccessorPairsOptions>;

/**
 * Enforce getter and setter pairs in objects and classes.
 *
 * @see [accessor-pairs](https://eslint.org/docs/latest/rules/accessor-pairs)
 */
export interface AccessorPairsRule {
  /**
   * Enforce getter and setter pairs in objects and classes.
   *
   * @see [accessor-pairs](https://eslint.org/docs/latest/rules/accessor-pairs)
   */
  'accessor-pairs': AccessorPairsRuleConfig;
}
