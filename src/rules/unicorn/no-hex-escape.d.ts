import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of Unicode escapes instead of hexadecimal escapes.
 *
 * @see [no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-hex-escape.md)
 */
export type NoHexEscapeRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of Unicode escapes instead of hexadecimal escapes.
 *
 * @see [no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-hex-escape.md)
 */
export interface NoHexEscapeRule {
  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   *
   * @see [no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-hex-escape.md)
   */
  'unicorn/no-hex-escape': NoHexEscapeRuleConfig;
}
