import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type FuncNamesOption =
  | []
  | [Value]
  | [
      Value,
      {
        generators?: Value;
      },
    ];
export type Value = 'always' | 'as-needed' | 'never';

/**
 * Options.
 */
export type FuncNamesOptions = FuncNamesOption;

/**
 * Require or disallow named `function` expressions.
 *
 * @see [func-names](https://eslint.org/docs/latest/rules/func-names)
 */
export type FuncNamesRuleConfig = RuleConfig<FuncNamesOptions>;

/**
 * Require or disallow named `function` expressions.
 *
 * @see [func-names](https://eslint.org/docs/latest/rules/func-names)
 */
export interface FuncNamesRule {
  /**
   * Require or disallow named `function` expressions.
   *
   * @see [func-names](https://eslint.org/docs/latest/rules/func-names)
   */
  'func-names': FuncNamesRuleConfig;
}
