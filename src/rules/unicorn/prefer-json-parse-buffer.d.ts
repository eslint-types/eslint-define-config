import type { RuleConfig } from '../rule-config';

/**
 * Prefer reading a JSON file as a buffer.
 *
 * @see [prefer-json-parse-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-json-parse-buffer.md)
 */
export type PreferJsonParseBufferRuleConfig = RuleConfig<[]>;

/**
 * Prefer reading a JSON file as a buffer.
 *
 * @see [prefer-json-parse-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-json-parse-buffer.md)
 */
export interface PreferJsonParseBufferRule {
  /**
   * Prefer reading a JSON file as a buffer.
   *
   * @see [prefer-json-parse-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-json-parse-buffer.md)
   */
  'unicorn/prefer-json-parse-buffer': PreferJsonParseBufferRuleConfig;
}
