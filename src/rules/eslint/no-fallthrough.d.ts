import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoFallthroughOption {
  commentPattern?: string;
  allowEmptyCase?: boolean;
}

/**
 * Options.
 */
export type NoFallthroughOptions = [NoFallthroughOption?];

/**
 * Disallow fallthrough of `case` statements.
 *
 * @see [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough)
 */
export type NoFallthroughRuleConfig = RuleConfig<NoFallthroughOptions>;

/**
 * Disallow fallthrough of `case` statements.
 *
 * @see [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough)
 */
export interface NoFallthroughRule {
  /**
   * Disallow fallthrough of `case` statements.
   *
   * @see [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough)
   */
  'no-fallthrough': NoFallthroughRuleConfig;
}
