import type { RuleConfig } from '../rule-config';

/**
 *
 *
 * @see [unambiguous](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/unambiguous.md)
 */
export type UnambiguousRuleConfig = RuleConfig<[]>;

/**
 *
 *
 * @see [unambiguous](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/unambiguous.md)
 */
export interface UnambiguousRule {
  /**
   *
   *
   * @see [unambiguous](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/unambiguous.md)
   */
  'import/unambiguous': UnambiguousRuleConfig;
}
