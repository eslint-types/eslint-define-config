import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export type PreferGlobalTextDecoderOption = 'always' | 'never';

/**
 * Options.
 */
export type PreferGlobalTextDecoderOptions = [PreferGlobalTextDecoderOption?];

/**
 * Enforce either `TextDecoder` or `require("util").TextDecoder`.
 *
 * @see [prefer-global/text-decoder](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/text-decoder.md)
 */
export type PreferGlobalTextDecoderRuleConfig =
  RuleConfig<PreferGlobalTextDecoderOptions>;

/**
 * Enforce either `TextDecoder` or `require("util").TextDecoder`.
 *
 * @see [prefer-global/text-decoder](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/text-decoder.md)
 */
export interface PreferGlobalTextDecoderRule {
  /**
   * Enforce either `TextDecoder` or `require("util").TextDecoder`.
   *
   * @see [prefer-global/text-decoder](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/text-decoder.md)
   */
  'n/prefer-global/text-decoder': PreferGlobalTextDecoderRuleConfig;
}
