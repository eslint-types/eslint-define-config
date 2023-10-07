import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferReadonlyOption {
  onlyInlineLambdas?: boolean;
}

/**
 * Options.
 */
export type PreferReadonlyOptions = [PreferReadonlyOption?];

/**
 * Require private members to be marked as `readonly` if they're never modified outside of the constructor.
 *
 * @see [prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly)
 */
export type PreferReadonlyRuleConfig = RuleConfig<PreferReadonlyOptions>;

/**
 * Require private members to be marked as `readonly` if they're never modified outside of the constructor.
 *
 * @see [prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly)
 */
export interface PreferReadonlyRule {
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor.
   *
   * @see [prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly)
   */
  '@typescript-eslint/prefer-readonly': PreferReadonlyRuleConfig;
}
