import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDuplicatesOption {
  considerQueryString?: boolean;
  'prefer-inline'?: boolean;
}

/**
 * Options.
 */
export type NoDuplicatesOptions = [NoDuplicatesOption?];

/**
 * Forbid repeated import of the same module in multiple places.
 *
 * @see [no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-duplicates.md)
 */
export type NoDuplicatesRuleConfig = RuleConfig<NoDuplicatesOptions>;

/**
 * Forbid repeated import of the same module in multiple places.
 *
 * @see [no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-duplicates.md)
 */
export interface NoDuplicatesRule {
  /**
   * Forbid repeated import of the same module in multiple places.
   *
   * @see [no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-duplicates.md)
   */
  'import/no-duplicates': NoDuplicatesRuleConfig;
}
