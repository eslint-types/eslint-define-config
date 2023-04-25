import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface HookUseStateOption {
  allowDestructuredState?: boolean;
}

/**
 * Options.
 */
export type HookUseStateOptions = [HookUseStateOption?];

/**
 * Ensure destructuring and symmetric naming of useState hook value and setter variables.
 *
 * @see [hook-use-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md)
 */
export type HookUseStateRuleConfig = RuleConfig<HookUseStateOptions>;

/**
 * Ensure destructuring and symmetric naming of useState hook value and setter variables.
 *
 * @see [hook-use-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md)
 */
export interface HookUseStateRule {
  /**
   * Ensure destructuring and symmetric naming of useState hook value and setter variables.
   *
   * @see [hook-use-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md)
   */
  'react/hook-use-state': HookUseStateRuleConfig;
}
