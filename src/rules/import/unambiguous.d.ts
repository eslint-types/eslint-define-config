import type { RuleConfig } from '../rule-config';

/**
 * Forbid potentially ambiguous parse goal (`script` vs. `module`).
 *
 * @see [unambiguous](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/unambiguous.md)
 */
export type UnambiguousRuleConfig = RuleConfig<[]>;

/**
 * Forbid potentially ambiguous parse goal (`script` vs. `module`).
 *
 * @see [unambiguous](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/unambiguous.md)
 */
export interface UnambiguousRule {
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   *
   * @see [unambiguous](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/unambiguous.md)
   */
  'import/unambiguous': UnambiguousRuleConfig;
}
