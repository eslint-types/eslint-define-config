import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-named-as-default](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-as-default.md)
 */
export type NoNamedAsDefaultRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-named-as-default](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-as-default.md)
 */
export interface NoNamedAsDefaultRule {
  /**
   *
   * @see [no-named-as-default](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-as-default.md)
   */
  'import/no-named-as-default': NoNamedAsDefaultRuleConfig;
}
