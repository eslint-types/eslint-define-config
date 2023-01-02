import type { RuleConfig } from '../rule-config';

/**
 * Enforce specifying rules to disable in `eslint-disable` comments.
 *
 * @see [no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-abusive-eslint-disable.md)
 */
export type NoAbusiveEslintDisableRuleConfig = RuleConfig<[]>;

/**
 * Enforce specifying rules to disable in `eslint-disable` comments.
 *
 * @see [no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-abusive-eslint-disable.md)
 */
export interface NoAbusiveEslintDisableRule {
  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   *
   * @see [no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-abusive-eslint-disable.md)
   */
  'unicorn/no-abusive-eslint-disable': NoAbusiveEslintDisableRuleConfig;
}
