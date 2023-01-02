import type { RuleConfig } from '../rule-config';

/**
 * Collection sizes and array length comparisons should make sense.
 *
 * @see [no-collection-size-mischeck](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collection-size-mischeck.md)
 */
export type NoCollectionSizeMischeckRuleConfig = RuleConfig<[]>;

/**
 * Collection sizes and array length comparisons should make sense.
 *
 * @see [no-collection-size-mischeck](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collection-size-mischeck.md)
 */
export interface NoCollectionSizeMischeckRule {
  /**
   * Collection sizes and array length comparisons should make sense.
   *
   * @see [no-collection-size-mischeck](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collection-size-mischeck.md)
   */
  'sonarjs/no-collection-size-mischeck': NoCollectionSizeMischeckRuleConfig;
}
