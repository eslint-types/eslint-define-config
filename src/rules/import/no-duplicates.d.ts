import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDuplicatesOption {
  considerQueryString?: boolean;
}

/**
 * Options.
 */
export type NoDuplicatesOptions = [NoDuplicatesOption?];

/**
 *
 * @see [no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-duplicates.md)
 */
export type NoDuplicatesRuleConfig = RuleConfig<NoDuplicatesOptions>;

/**
 *
 * @see [no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-duplicates.md)
 */
export interface NoDuplicatesRule {
  /**
   *
   * @see [no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-duplicates.md)
   */
  'import/no-duplicates': NoDuplicatesRuleConfig;
}
