import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoDidUpdateSetStateOption = 'disallow-in-func';

/**
 * Options.
 */
export type NoDidUpdateSetStateOptions = [NoDidUpdateSetStateOption?];

/**
 * Disallow usage of setState in componentDidUpdate.
 *
 * @see [no-did-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md)
 */
export type NoDidUpdateSetStateRuleConfig =
  RuleConfig<NoDidUpdateSetStateOptions>;

/**
 * Disallow usage of setState in componentDidUpdate.
 *
 * @see [no-did-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md)
 */
export interface NoDidUpdateSetStateRule {
  /**
   * Disallow usage of setState in componentDidUpdate.
   *
   * @see [no-did-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md)
   */
  'react/no-did-update-set-state': NoDidUpdateSetStateRuleConfig;
}
