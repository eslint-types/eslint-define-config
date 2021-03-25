import type { RuleConfig } from '../rule-config';

/**
 * Values for comma dangle.
 */
export type CommaDangleOptionValue = 'never' | 'always' | 'always-multiline' | 'only-multiline' | 'ignore';

/**
 * Options.
 */
export type CommaDangleOption =
  | CommaDangleOptionValue
  | {
      arrays?: CommaDangleOptionValue;
      objects?: CommaDangleOptionValue;
      imports?: CommaDangleOptionValue;
      exports?: CommaDangleOptionValue;
      functions?: CommaDangleOptionValue;
    };

/**
 * Require or disallow trailing commas.
 *
 * @see [comma-dangle](https://eslint.org/docs/rules/comma-dangle)
 */
export type CommaDangleRuleConfig = RuleConfig<[CommaDangleOption?]>;

/**
 * Require or disallow trailing commas.
 *
 * @see [comma-dangle](https://eslint.org/docs/rules/comma-dangle)
 */
export interface CommaDangleRule {
  /**
   * Require or disallow trailing commas.
   *
   * @see [comma-dangle](https://eslint.org/docs/rules/comma-dangle)
   */
  'comma-dangle': CommaDangleRuleConfig;
}
