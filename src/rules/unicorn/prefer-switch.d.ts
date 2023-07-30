import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferSwitchOption {
  minimumCases?: number;
  emptyDefaultCase?:
    | 'no-default-comment'
    | 'do-nothing-comment'
    | 'no-default-case';
}

/**
 * Options.
 */
export type PreferSwitchOptions = [PreferSwitchOption?];

/**
 * Prefer `switch` over multiple `else-if`.
 *
 * @see [prefer-switch](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-switch.md)
 */
export type PreferSwitchRuleConfig = RuleConfig<PreferSwitchOptions>;

/**
 * Prefer `switch` over multiple `else-if`.
 *
 * @see [prefer-switch](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-switch.md)
 */
export interface PreferSwitchRule {
  /**
   * Prefer `switch` over multiple `else-if`.
   *
   * @see [prefer-switch](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-switch.md)
   */
  'unicorn/prefer-switch': PreferSwitchRuleConfig;
}
