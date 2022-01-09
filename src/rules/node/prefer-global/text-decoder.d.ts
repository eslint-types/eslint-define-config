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
 * @see [prefer-global/text-decoder](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/text-decoder.md)
 */
export type PreferGlobalTextDecoderRuleConfig =
  RuleConfig<PreferGlobalTextDecoderOptions>;

/**
 * Enforce either `TextDecoder` or `require("util").TextDecoder`.
 *
 * @see [prefer-global/text-decoder](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/text-decoder.md)
 */
export interface PreferGlobalTextDecoderRule {
  /**
   * Enforce either `TextDecoder` or `require("util").TextDecoder`.
   *
   * @see [prefer-global/text-decoder](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/text-decoder.md)
   */
  'node/prefer-global/text-decoder': PreferGlobalTextDecoderRuleConfig;
}
