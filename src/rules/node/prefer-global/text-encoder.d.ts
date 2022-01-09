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
 * @see [prefer-global/text-encoder](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/text-encoder.md)
 */
export type PreferGlobalTextEncoderRuleConfig =
  RuleConfig<PreferGlobalTextEncoderOptions>;

/**
 * Enforce either `TextEncoder` or `require("util").TextEncoder`.
 *
 * @see [prefer-global/text-encoder](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/text-encoder.md)
 */
export interface PreferGlobalTextEncoderRule {
  /**
   * Enforce either `TextEncoder` or `require("util").TextEncoder`.
   *
   * @see [prefer-global/text-encoder](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/text-encoder.md)
   */
  'node/prefer-global/text-encoder': PreferGlobalTextEncoderRuleConfig;
}
