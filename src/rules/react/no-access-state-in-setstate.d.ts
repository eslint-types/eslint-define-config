import type { RuleConfig } from '../rule-config';

/**
 * Disallow when this.state is accessed within setState.
 *
 * @see [no-access-state-in-setstate](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md)
 */
export type NoAccessStateInSetstateRuleConfig = RuleConfig<[]>;

/**
 * Disallow when this.state is accessed within setState.
 *
 * @see [no-access-state-in-setstate](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md)
 */
export interface NoAccessStateInSetstateRule {
  /**
   * Disallow when this.state is accessed within setState.
   *
   * @see [no-access-state-in-setstate](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md)
   */
  'react/no-access-state-in-setstate': NoAccessStateInSetstateRuleConfig;
}
