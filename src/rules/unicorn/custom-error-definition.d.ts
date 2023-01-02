import type { RuleConfig } from '../rule-config';

/**
 * Enforce correct `Error` subclassing.
 *
 * @see [custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/custom-error-definition.md)
 */
export type CustomErrorDefinitionRuleConfig = RuleConfig<[]>;

/**
 * Enforce correct `Error` subclassing.
 *
 * @see [custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/custom-error-definition.md)
 */
export interface CustomErrorDefinitionRule {
  /**
   * Enforce correct `Error` subclassing.
   *
   * @see [custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/custom-error-definition.md)
   */
  'unicorn/custom-error-definition': CustomErrorDefinitionRuleConfig;
}
