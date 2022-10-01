import type { RuleConfig } from '../rule-config';

/**
 * Disallow template literals.
 *
 * @see [no-template-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html)
 */
export type NoTemplateLiteralsRuleConfig = RuleConfig<[]>;

/**
 * Disallow template literals.
 *
 * @see [no-template-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html)
 */
export interface NoTemplateLiteralsRule {
  /**
   * Disallow template literals.
   *
   * @see [no-template-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html)
   */
  'jsonc/no-template-literals': NoTemplateLiteralsRuleConfig;
}
