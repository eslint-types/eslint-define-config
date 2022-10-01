import type { RuleConfig } from '../rule-config';

/**
 * Collection and array contents should be used.
 *
 * @see [no-unused-collection](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-unused-collection.md)
 */
export type NoUnusedCollectionRuleConfig = RuleConfig<[]>;

/**
 * Collection and array contents should be used.
 *
 * @see [no-unused-collection](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-unused-collection.md)
 */
export interface NoUnusedCollectionRule {
  /**
   * Collection and array contents should be used.
   *
   * @see [no-unused-collection](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-unused-collection.md)
   */
  'sonarjs/no-unused-collection': NoUnusedCollectionRuleConfig;
}
