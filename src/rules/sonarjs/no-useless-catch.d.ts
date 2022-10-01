import type { RuleConfig } from '../rule-config';

/**
 * "catch" clauses should do more than rethrow.
 *
 * @see [no-useless-catch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-useless-catch.md)
 */
export type NoUselessCatchRuleConfig = RuleConfig<[]>;

/**
 * "catch" clauses should do more than rethrow.
 *
 * @see [no-useless-catch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-useless-catch.md)
 */
export interface NoUselessCatchRule {
  /**
   * "catch" clauses should do more than rethrow.
   *
   * @see [no-useless-catch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-useless-catch.md)
   */
  'sonarjs/no-useless-catch': NoUselessCatchRuleConfig;
}
