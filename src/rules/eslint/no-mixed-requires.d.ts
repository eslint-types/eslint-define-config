import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoMixedRequiresOption =
  | boolean
  | {
      grouping?: boolean;
      allowCall?: boolean;
    };

/**
 * Options.
 */
export type NoMixedRequiresOptions = [NoMixedRequiresOption?];

/**
 * Disallow `require` calls to be mixed with regular variable declarations.
 *
 * @deprecated
 *
 * @see [no-mixed-requires](https://eslint.org/docs/latest/rules/no-mixed-requires)
 */
export type NoMixedRequiresRuleConfig = RuleConfig<NoMixedRequiresOptions>;

/**
 * Disallow `require` calls to be mixed with regular variable declarations.
 *
 * @deprecated
 *
 * @see [no-mixed-requires](https://eslint.org/docs/latest/rules/no-mixed-requires)
 */
export interface NoMixedRequiresRule {
  /**
   * Disallow `require` calls to be mixed with regular variable declarations.
   *
   * @deprecated
   *
   * @see [no-mixed-requires](https://eslint.org/docs/latest/rules/no-mixed-requires)
   */
  'no-mixed-requires': NoMixedRequiresRuleConfig;
}
