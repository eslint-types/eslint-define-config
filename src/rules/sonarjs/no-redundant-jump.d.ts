import type { RuleConfig } from '../rule-config';

/**
 * Jump statements should not be redundant.
 *
 * @see [no-redundant-jump](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-jump.md)
 */
export type NoRedundantJumpRuleConfig = RuleConfig<[]>;

/**
 * Jump statements should not be redundant.
 *
 * @see [no-redundant-jump](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-jump.md)
 */
export interface NoRedundantJumpRule {
  /**
   * Jump statements should not be redundant.
   *
   * @see [no-redundant-jump](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-jump.md)
   */
  'sonarjs/no-redundant-jump': NoRedundantJumpRuleConfig;
}
