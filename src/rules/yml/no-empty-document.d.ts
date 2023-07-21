import type { RuleConfig } from '../rule-config';

/**
 * Disallow empty document.
 *
 * @see [no-empty-document](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html)
 */
export type NoEmptyDocumentRuleConfig = RuleConfig<[]>;

/**
 * Disallow empty document.
 *
 * @see [no-empty-document](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html)
 */
export interface NoEmptyDocumentRule {
  /**
   * Disallow empty document.
   *
   * @see [no-empty-document](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html)
   */
  'yml/no-empty-document': NoEmptyDocumentRuleConfig;
}
