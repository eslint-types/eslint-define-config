import type { RuleConfig } from '../rule-config';

/**
 * Disallow RegExp literals.
 *
 * @see [no-regexp-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html)
 */
export type NoRegexpLiteralsRuleConfig = RuleConfig<[]>;

/**
 * Disallow RegExp literals.
 *
 * @see [no-regexp-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html)
 */
export interface NoRegexpLiteralsRule {
  /**
   * Disallow RegExp literals.
   *
   * @see [no-regexp-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html)
   */
  'jsonc/no-regexp-literals': NoRegexpLiteralsRuleConfig;
}
