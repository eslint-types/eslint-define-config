import type { RuleConfig } from '../rule-config';

/**
 * Disallow direct mutation of this.state.
 *
 * @see [no-direct-mutation-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md)
 */
export type NoDirectMutationStateRuleConfig = RuleConfig<[]>;

/**
 * Disallow direct mutation of this.state.
 *
 * @see [no-direct-mutation-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md)
 */
export interface NoDirectMutationStateRule {
  /**
   * Disallow direct mutation of this.state.
   *
   * @see [no-direct-mutation-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md)
   */
  'react/no-direct-mutation-state': NoDirectMutationStateRuleConfig;
}
