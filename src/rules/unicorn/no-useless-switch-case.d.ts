import type { RuleConfig } from '../rule-config';

/**
 * Disallow useless case in switch statements.
 *
 * @see [no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-useless-switch-case.md)
 */
export type NoUselessSwitchCaseRuleConfig = RuleConfig<[]>;

/**
 * Disallow useless case in switch statements.
 *
 * @see [no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-useless-switch-case.md)
 */
export interface NoUselessSwitchCaseRule {
  /**
   * Disallow useless case in switch statements.
   *
   * @see [no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-useless-switch-case.md)
   */
  'unicorn/no-useless-switch-case': NoUselessSwitchCaseRuleConfig;
}
