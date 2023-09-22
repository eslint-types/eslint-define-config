import type { RuleConfig } from '../rule-config';

/**
 * Ensure a default export is present, given a default import.
 *
 * @see [default](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/default.md)
 */
export type DefaultRuleConfig = RuleConfig<[]>;

/**
 * Ensure a default export is present, given a default import.
 *
 * @see [default](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/default.md)
 */
export interface DefaultRule {
  /**
   * Ensure a default export is present, given a default import.
   *
   * @see [default](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/default.md)
   */
  'import/default': DefaultRuleConfig;
}
