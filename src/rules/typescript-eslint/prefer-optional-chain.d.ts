import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferOptionalChainOption {
  /**
   * Check operands that are typed as `any` when inspecting "loose boolean" operands.
   */
  checkAny?: boolean;
  /**
   * Check operands that are typed as `unknown` when inspecting "loose boolean" operands.
   */
  checkUnknown?: boolean;
  /**
   * Check operands that are typed as `string` when inspecting "loose boolean" operands.
   */
  checkString?: boolean;
  /**
   * Check operands that are typed as `number` when inspecting "loose boolean" operands.
   */
  checkNumber?: boolean;
  /**
   * Check operands that are typed as `boolean` when inspecting "loose boolean" operands.
   */
  checkBoolean?: boolean;
  /**
   * Check operands that are typed as `bigint` when inspecting "loose boolean" operands.
   */
  checkBigInt?: boolean;
  /**
   * Skip operands that are not typed with `null` and/or `undefined` when inspecting "loose boolean" operands.
   */
  requireNullish?: boolean;
  /**
   * Allow autofixers that will change the return type of the expression. This option is considered unsafe as it may break the build.
   */
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean;
}

/**
 * Options.
 */
export type PreferOptionalChainOptions = [PreferOptionalChainOption?];

/**
 * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
 *
 * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
 */
export type PreferOptionalChainRuleConfig =
  RuleConfig<PreferOptionalChainOptions>;

/**
 * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
 *
 * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
 */
export interface PreferOptionalChainRule {
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
   *
   * @see [prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
   */
  '@typescript-eslint/prefer-optional-chain': PreferOptionalChainRuleConfig;
}
