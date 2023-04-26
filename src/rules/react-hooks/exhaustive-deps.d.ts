import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ExhaustiveDepsOption {
  additionalHooks?: string;
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean;
}

/**
 * Options.
 */
export type ExhaustiveDepsOptions = [ExhaustiveDepsOption?];

/**
 * Verifies the list of dependencies for Hooks like useEffect and similar.
 *
 * @see [exhaustive-deps](https://github.com/facebook/react/issues/14920)
 */
export type ExhaustiveDepsRuleConfig = RuleConfig<ExhaustiveDepsOptions>;

/**
 * Verifies the list of dependencies for Hooks like useEffect and similar.
 *
 * @see [exhaustive-deps](https://github.com/facebook/react/issues/14920)
 */
export interface ExhaustiveDepsRule {
  /**
   * Verifies the list of dependencies for Hooks like useEffect and similar.
   *
   * @see [exhaustive-deps](https://github.com/facebook/react/issues/14920)
   */
  'react-hooks/exhaustive-deps': ExhaustiveDepsRuleConfig;
}
