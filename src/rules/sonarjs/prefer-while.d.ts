import type { RuleConfig } from '../rule-config';

/**
 * A "while" loop should be used instead of a "for" loop.
 *
 * @see [prefer-while](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-while.md)
 */
export type PreferWhileRuleConfig = RuleConfig<[]>;

/**
 * A "while" loop should be used instead of a "for" loop.
 *
 * @see [prefer-while](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-while.md)
 */
export interface PreferWhileRule {
  /**
   * A "while" loop should be used instead of a "for" loop.
   *
   * @see [prefer-while](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-while.md)
   */
  'sonarjs/prefer-while': PreferWhileRuleConfig;
}
