import type { RuleConfig } from '../rule-config';

/**
 * Disallow definitions of unused state.
 *
 * @see [no-unused-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md)
 */
export type NoUnusedStateRuleConfig = RuleConfig<[]>;

/**
 * Disallow definitions of unused state.
 *
 * @see [no-unused-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md)
 */
export interface NoUnusedStateRule {
  /**
   * Disallow definitions of unused state.
   *
   * @see [no-unused-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md)
   */
  'react/no-unused-state': NoUnusedStateRuleConfig;
}
