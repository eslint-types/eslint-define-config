import type { RuleConfig } from '../rule-config';

/**
 *
 *
 * @see [default](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/default.md)
 */
export type DefaultRuleConfig = RuleConfig<[]>;

/**
 *
 *
 * @see [default](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/default.md)
 */
export interface DefaultRule {
  /**
   *
   *
   * @see [default](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/default.md)
   */
  'import/default': DefaultRuleConfig;
}
