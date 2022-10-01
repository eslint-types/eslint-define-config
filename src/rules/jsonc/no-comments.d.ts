import type { RuleConfig } from '../rule-config';

/**
 * Disallow comments.
 *
 * @see [no-comments](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html)
 */
export type NoCommentsRuleConfig = RuleConfig<[]>;

/**
 * Disallow comments.
 *
 * @see [no-comments](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html)
 */
export interface NoCommentsRule {
  /**
   * Disallow comments.
   *
   * @see [no-comments](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html)
   */
  'jsonc/no-comments': NoCommentsRuleConfig;
}
