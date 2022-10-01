import type { RuleConfig } from '../rule-config';

/**
 * Disallow octal escape sequences in string literals.
 *
 * @see [no-octal-escape](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html)
 */
export type NoOctalEscapeRuleConfig = RuleConfig<[]>;

/**
 * Disallow octal escape sequences in string literals.
 *
 * @see [no-octal-escape](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html)
 */
export interface NoOctalEscapeRule {
  /**
   * Disallow octal escape sequences in string literals.
   *
   * @see [no-octal-escape](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html)
   */
  'jsonc/no-octal-escape': NoOctalEscapeRuleConfig;
}
