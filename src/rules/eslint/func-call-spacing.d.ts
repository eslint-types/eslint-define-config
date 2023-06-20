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
      },
    ];

/**
 * Options.
 */
export type FuncCallSpacingOptions = FuncCallSpacingOption;

/**
 * Require or disallow spacing between function identifiers and their invocations.
 *
 * @see [func-call-spacing](https://eslint.org/docs/latest/rules/func-call-spacing)
 */
export type FuncCallSpacingRuleConfig = RuleConfig<FuncCallSpacingOptions>;

/**
 * Require or disallow spacing between function identifiers and their invocations.
 *
 * @see [func-call-spacing](https://eslint.org/docs/latest/rules/func-call-spacing)
 */
export interface FuncCallSpacingRule {
  /**
   * Require or disallow spacing between function identifiers and their invocations.
   *
   * @see [func-call-spacing](https://eslint.org/docs/latest/rules/func-call-spacing)
   */
  'func-call-spacing': FuncCallSpacingRuleConfig;
}
