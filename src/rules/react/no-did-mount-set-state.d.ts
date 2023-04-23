import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoDidMountSetStateOption = 'disallow-in-func';

/**
 * Options.
 */
export type NoDidMountSetStateOptions = [NoDidMountSetStateOption?];

/**
 * Disallow usage of setState in componentDidMount.
 *
 * @see [no-did-mount-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md)
 */
export type NoDidMountSetStateRuleConfig =
  RuleConfig<NoDidMountSetStateOptions>;

/**
 * Disallow usage of setState in componentDidMount.
 *
 * @see [no-did-mount-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md)
 */
export interface NoDidMountSetStateRule {
  /**
   * Disallow usage of setState in componentDidMount.
   *
   * @see [no-did-mount-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md)
   */
  'react/no-did-mount-set-state': NoDidMountSetStateRuleConfig;
}
