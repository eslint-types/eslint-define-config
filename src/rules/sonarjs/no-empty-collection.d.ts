import type { RuleConfig } from '../rule-config';

/**
 * Empty collections should not be accessed or iterated.
 *
 * @see [no-empty-collection](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-empty-collection.md)
 */
export type NoEmptyCollectionRuleConfig = RuleConfig<[]>;

/**
 * Empty collections should not be accessed or iterated.
 *
 * @see [no-empty-collection](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-empty-collection.md)
 */
export interface NoEmptyCollectionRule {
  /**
   * Empty collections should not be accessed or iterated.
   *
   * @see [no-empty-collection](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-empty-collection.md)
   */
  'sonarjs/no-empty-collection': NoEmptyCollectionRuleConfig;
}
