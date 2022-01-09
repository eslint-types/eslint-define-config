import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export type PreferGlobalBufferOption = 'always' | 'never';

/**
 * Options.
 */
export type PreferGlobalBufferOptions = [PreferGlobalBufferOption?];

/**
 * Enforce either `Buffer` or `require("buffer").Buffer`.
 *
 * @see [prefer-global/buffer](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/buffer.md)
 */
export type PreferGlobalBufferRuleConfig =
  RuleConfig<PreferGlobalBufferOptions>;

/**
 * Enforce either `Buffer` or `require("buffer").Buffer`.
 *
 * @see [prefer-global/buffer](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/buffer.md)
 */
export interface PreferGlobalBufferRule {
  /**
   * Enforce either `Buffer` or `require("buffer").Buffer`.
   *
   * @see [prefer-global/buffer](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/buffer.md)
   */
  'node/prefer-global/buffer': PreferGlobalBufferRuleConfig;
}
