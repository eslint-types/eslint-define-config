import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type FirstOption = 'absolute-first' | 'disable-absolute-first';

/**
 * Options.
 */
export type FirstOptions = [FirstOption?];

/**
 * Ensure all imports appear before other statements.
 *
 * @see [first](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/first.md)
 */
export type FirstRuleConfig = RuleConfig<FirstOptions>;

/**
 * Ensure all imports appear before other statements.
 *
 * @see [first](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/first.md)
 */
export interface FirstRule {
  /**
   * Ensure all imports appear before other statements.
   *
   * @see [first](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/first.md)
   */
  'import/first': FirstRuleConfig;
}
