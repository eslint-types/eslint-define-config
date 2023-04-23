import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type StateInConstructorOption = 'always' | 'never';

/**
 * Options.
 */
export type StateInConstructorOptions = [StateInConstructorOption?];

/**
 * Enforce class component state initialization style.
 *
 * @see [state-in-constructor](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md)
 */
export type StateInConstructorRuleConfig =
  RuleConfig<StateInConstructorOptions>;

/**
 * Enforce class component state initialization style.
 *
 * @see [state-in-constructor](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md)
 */
export interface StateInConstructorRule {
  /**
   * Enforce class component state initialization style.
   *
   * @see [state-in-constructor](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md)
   */
  'react/state-in-constructor': StateInConstructorRuleConfig;
}
