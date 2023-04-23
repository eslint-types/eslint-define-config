import type { RuleConfig } from '../rule-config';

/**
 * Disallow usage of setState.
 *
 * @see [no-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-set-state.md)
 */
export type NoSetStateRuleConfig = RuleConfig<[]>;

/**
 * Disallow usage of setState.
 *
 * @see [no-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-set-state.md)
 */
export interface NoSetStateRule {
  /**
   * Disallow usage of setState.
   *
   * @see [no-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-set-state.md)
   */
  'react/no-set-state': NoSetStateRuleConfig;
}
