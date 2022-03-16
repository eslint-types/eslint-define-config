import type { RuleConfig } from '../rule-config';

/**
 *
 *
 * @see [exports-last](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/exports-last.md)
 */
export type ExportsLastRuleConfig = RuleConfig<[]>;

/**
 *
 *
 * @see [exports-last](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/exports-last.md)
 */
export interface ExportsLastRule {
  /**
   *
   *
   * @see [exports-last](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/exports-last.md)
   */
  'import/exports-last': ExportsLastRuleConfig;
}
