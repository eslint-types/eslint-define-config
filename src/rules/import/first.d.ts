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
 *
 * @see [first](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/first.md)
 */
export type FirstRuleConfig = RuleConfig<FirstOptions>;

/**
 *
 * @see [first](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/first.md)
 */
export interface FirstRule {
  /**
   *
   * @see [first](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/first.md)
   */
  'import/first': FirstRuleConfig;
}
