import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Ensure all exports appear after other statements.
 *
 * @see [exports-last](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/exports-last.md)
 */
export type ExportsLastRuleConfig = RuleConfig<[]>;

/**
 * Ensure all exports appear after other statements.
 *
 * @see [exports-last](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/exports-last.md)
 */
export interface ExportsLastRule {
  /**
   * Ensure all exports appear after other statements.
   *
   * @see [exports-last](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/exports-last.md)
   */
  'import/exports-last': ExportsLastRuleConfig;
}
