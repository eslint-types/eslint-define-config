import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferReadonlyOption {
  onlyInlineLambdas?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type PreferReadonlyOptions = [PreferReadonlyOption?];

/**
 * Requires that private members are marked as `readonly` if they're never modified outside of the constructor.
 *
 * @see [prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly)
 */
export type PreferReadonlyRuleConfig = RuleConfig<PreferReadonlyOptions>;

/**
 * Requires that private members are marked as `readonly` if they're never modified outside of the constructor.
 *
 * @see [prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly)
 */
export interface PreferReadonlyRule {
  /**
   * Requires that private members are marked as `readonly` if they're never modified outside of the constructor.
   *
   * @see [prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly)
   */
  '@typescript-eslint/prefer-readonly': PreferReadonlyRuleConfig;
}
