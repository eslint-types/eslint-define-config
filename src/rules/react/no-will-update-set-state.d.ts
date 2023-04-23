import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoWillUpdateSetStateOption = 'disallow-in-func';

/**
 * Options.
 */
export type NoWillUpdateSetStateOptions = [NoWillUpdateSetStateOption?];

/**
 * Disallow usage of setState in componentWillUpdate.
 *
 * @see [no-will-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md)
 */
export type NoWillUpdateSetStateRuleConfig =
  RuleConfig<NoWillUpdateSetStateOptions>;

/**
 * Disallow usage of setState in componentWillUpdate.
 *
 * @see [no-will-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md)
 */
export interface NoWillUpdateSetStateRule {
  /**
   * Disallow usage of setState in componentWillUpdate.
   *
   * @see [no-will-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md)
   */
  'react/no-will-update-set-state': NoWillUpdateSetStateRuleConfig;
}
