import type { RuleConfig } from '../rule-config';

/**
 * Disallow Unicode code point escape sequences.
 *
 * @see [no-unicode-codepoint-escapes](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html)
 */
export type NoUnicodeCodepointEscapesRuleConfig = RuleConfig<[]>;

/**
 * Disallow Unicode code point escape sequences.
 *
 * @see [no-unicode-codepoint-escapes](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html)
 */
export interface NoUnicodeCodepointEscapesRule {
  /**
   * Disallow Unicode code point escape sequences.
   *
   * @see [no-unicode-codepoint-escapes](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html)
   */
  'jsonc/no-unicode-codepoint-escapes': NoUnicodeCodepointEscapesRuleConfig;
}
