import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type FuncCallSpacingOption =
  | []
  | ['never']
  | []
  | ['always']
  | [
      'always',
      {
        allowNewlines?: boolean;
      }
    ];

/**
 * Options.
 */
export type FuncCallSpacingOptions = FuncCallSpacingOption;

/**
 * Require or disallow spacing between function identifiers and their invocations.
 *
 * @see [func-call-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/func-call-spacing.md)
 */
export type FuncCallSpacingRuleConfig = RuleConfig<FuncCallSpacingOptions>;

/**
 * Require or disallow spacing between function identifiers and their invocations.
 *
 * @see [func-call-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/func-call-spacing.md)
 */
export interface FuncCallSpacingRule {
  /**
   * Require or disallow spacing between function identifiers and their invocations.
   *
   * @see [func-call-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/func-call-spacing.md)
   */
  '@typescript-eslint/func-call-spacing': FuncCallSpacingRuleConfig;
}
