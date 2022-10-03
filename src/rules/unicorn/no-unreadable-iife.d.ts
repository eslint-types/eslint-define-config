import type { RuleConfig } from '../rule-config';

/**
 * Disallow unreadable IIFEs.
 *
 * @see [no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/no-unreadable-iife.md)
 */
export type NoUnreadableIifeRuleConfig = RuleConfig<[]>;

/**
 * Disallow unreadable IIFEs.
 *
 * @see [no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/no-unreadable-iife.md)
 */
export interface NoUnreadableIifeRule {
  /**
   * Disallow unreadable IIFEs.
   *
   * @see [no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/no-unreadable-iife.md)
   */
  'unicorn/no-unreadable-iife': NoUnreadableIifeRuleConfig;
}
