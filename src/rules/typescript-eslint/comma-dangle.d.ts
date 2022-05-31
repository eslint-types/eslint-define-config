import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CommaDangleOption =
  | []
  | [
      | Value
      | {
          arrays?: ValueWithIgnore;
          objects?: ValueWithIgnore;
          imports?: ValueWithIgnore;
          exports?: ValueWithIgnore;
          functions?: ValueWithIgnore;
          enums?: ValueWithIgnore;
          generics?: ValueWithIgnore;
          tuples?: ValueWithIgnore;
        },
    ];
export type Value = 'always-multiline' | 'always' | 'never' | 'only-multiline';
export type ValueWithIgnore =
  | 'always-multiline'
  | 'always'
  | 'never'
  | 'only-multiline'
  | 'ignore';

/**
 * Options.
 */
export type CommaDangleOptions = CommaDangleOption;

/**
 * Require or disallow trailing commas.
 *
 * @see [comma-dangle](https://typescript-eslint.io/rules/comma-dangle)
 */
export type CommaDangleRuleConfig = RuleConfig<CommaDangleOptions>;

/**
 * Require or disallow trailing commas.
 *
 * @see [comma-dangle](https://typescript-eslint.io/rules/comma-dangle)
 */
export interface CommaDangleRule {
  /**
   * Require or disallow trailing commas.
   *
   * @see [comma-dangle](https://typescript-eslint.io/rules/comma-dangle)
   */
  '@typescript-eslint/comma-dangle': CommaDangleRuleConfig;
}
