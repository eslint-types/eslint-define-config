import type { RuleConfig } from '../rule-config';

/**
 * Disallow tabs for indentation.
 *
 * @see [no-tab-indent](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html)
 */
export type NoTabIndentRuleConfig = RuleConfig<[]>;

/**
 * Disallow tabs for indentation.
 *
 * @see [no-tab-indent](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html)
 */
export interface NoTabIndentRule {
  /**
   * Disallow tabs for indentation.
   *
   * @see [no-tab-indent](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html)
   */
  'yml/no-tab-indent': NoTabIndentRuleConfig;
}
