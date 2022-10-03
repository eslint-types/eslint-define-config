import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export type PreferGlobalTextEncoderOption = 'always' | 'never';

/**
 * Options.
 */
export type PreferGlobalTextEncoderOptions = [PreferGlobalTextEncoderOption?];

/**
 * Enforce either `TextEncoder` or `require("util").TextEncoder`.
 *
 * @see [prefer-global/text-encoder](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/text-encoder.md)
 */
export type PreferGlobalTextEncoderRuleConfig =
  RuleConfig<PreferGlobalTextEncoderOptions>;

/**
 * Enforce either `TextEncoder` or `require("util").TextEncoder`.
 *
 * @see [prefer-global/text-encoder](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/text-encoder.md)
 */
export interface PreferGlobalTextEncoderRule {
  /**
   * Enforce either `TextEncoder` or `require("util").TextEncoder`.
   *
   * @see [prefer-global/text-encoder](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/text-encoder.md)
   */
  'n/prefer-global/text-encoder': PreferGlobalTextEncoderRuleConfig;
}
