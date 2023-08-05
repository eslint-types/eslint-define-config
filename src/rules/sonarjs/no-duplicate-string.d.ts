import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type NoDuplicateStringConfig = 'sonar-runtime';

/**
 * Option.
 */
export interface NoDuplicateStringOption {
  threshold?: number;
  ignoreStrings?: string;
  [k: string]: any;
}

/**
 * Options.
 */
export type NoDuplicateStringOptions = [
  NoDuplicateStringOption?,
  NoDuplicateStringConfig?,
];

/**
 * String literals should not be duplicated.
 *
 * @see [no-duplicate-string](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicate-string.md)
 */
export type NoDuplicateStringRuleConfig = RuleConfig<NoDuplicateStringOptions>;

/**
 * String literals should not be duplicated.
 *
 * @see [no-duplicate-string](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicate-string.md)
 */
export interface NoDuplicateStringRule {
  /**
   * String literals should not be duplicated.
   *
   * @see [no-duplicate-string](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicate-string.md)
   */
  'sonarjs/no-duplicate-string': NoDuplicateStringRuleConfig;
}
