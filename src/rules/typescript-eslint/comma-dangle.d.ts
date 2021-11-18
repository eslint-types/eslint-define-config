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
        }
    ];
export type Value = 'always-multiline' | 'always' | 'never' | 'only-multiline';
export type ValueWithIgnore = 'always-multiline' | 'always' | 'never' | 'only-multiline' | 'ignore';

/**
 * Options.
 */
export type CommaDangleOptions = CommaDangleOption;

/**
 * Require or disallow trailing comma.
 *
 * @see [comma-dangle](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/comma-dangle.md)
 */
export type CommaDangleRuleConfig = RuleConfig<CommaDangleOptions>;

/**
 * Require or disallow trailing comma.
 *
 * @see [comma-dangle](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/comma-dangle.md)
 */
export interface CommaDangleRule {
  /**
   * Require or disallow trailing comma.
   *
   * @see [comma-dangle](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/comma-dangle.md)
   */
  '@typescript-eslint/comma-dangle': CommaDangleRuleConfig;
}
