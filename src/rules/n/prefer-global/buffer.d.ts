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
 * @see [prefer-global/buffer](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/buffer.md)
 */
export type PreferGlobalBufferRuleConfig =
  RuleConfig<PreferGlobalBufferOptions>;

/**
 * Enforce either `Buffer` or `require("buffer").Buffer`.
 *
 * @see [prefer-global/buffer](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/buffer.md)
 */
export interface PreferGlobalBufferRule {
  /**
   * Enforce either `Buffer` or `require("buffer").Buffer`.
   *
   * @see [prefer-global/buffer](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/buffer.md)
   */
  'n/prefer-global/buffer': PreferGlobalBufferRuleConfig;
}
