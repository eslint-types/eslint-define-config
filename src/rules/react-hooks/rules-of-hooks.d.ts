import type { RuleConfig } from '../rule-config';

/**
 * Enforces the Rules of Hooks.
 *
 * @see [rules-of-hooks](https://reactjs.org/docs/hooks-rules.html)
 */
export type RulesOfHooksRuleConfig = RuleConfig<[]>;

/**
 * Enforces the Rules of Hooks.
 *
 * @see [rules-of-hooks](https://reactjs.org/docs/hooks-rules.html)
 */
export interface RulesOfHooksRule {
  /**
   * Enforces the Rules of Hooks.
   *
   * @see [rules-of-hooks](https://reactjs.org/docs/hooks-rules.html)
   */
  'react-hooks/rules-of-hooks': RulesOfHooksRuleConfig;
}
