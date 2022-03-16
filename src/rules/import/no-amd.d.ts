import type { RuleConfig } from '../rule-config';

/**
 *
 *
 * @see [no-amd](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-amd.md)
 */
export type NoAmdRuleConfig = RuleConfig<[]>;

/**
 *
 *
 * @see [no-amd](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-amd.md)
 */
export interface NoAmdRule {
  /**
   *
   *
   * @see [no-amd](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-amd.md)
   */
  'import/no-amd': NoAmdRuleConfig;
}
