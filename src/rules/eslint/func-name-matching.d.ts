import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type FuncNameMatchingOption =
  | []
  | ['always' | 'never']
  | [
      'always' | 'never',
      {
        considerPropertyDescriptor?: boolean;
        includeCommonJSModuleExports?: boolean;
      },
    ]
  | []
  | [
      {
        considerPropertyDescriptor?: boolean;
        includeCommonJSModuleExports?: boolean;
      },
    ];

/**
 * Options.
 */
export type FuncNameMatchingOptions = FuncNameMatchingOption;

/**
 * Require function names to match the name of the variable or property to which they are assigned.
 *
 * @see [func-name-matching](https://eslint.org/docs/latest/rules/func-name-matching)
 */
export type FuncNameMatchingRuleConfig = RuleConfig<FuncNameMatchingOptions>;

/**
 * Require function names to match the name of the variable or property to which they are assigned.
 *
 * @see [func-name-matching](https://eslint.org/docs/latest/rules/func-name-matching)
 */
export interface FuncNameMatchingRule {
  /**
   * Require function names to match the name of the variable or property to which they are assigned.
   *
   * @see [func-name-matching](https://eslint.org/docs/latest/rules/func-name-matching)
   */
  'func-name-matching': FuncNameMatchingRuleConfig;
}
