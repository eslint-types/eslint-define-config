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
 * @see [prefer-readonly](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-readonly.md)
 */
export type PreferReadonlyRuleConfig = RuleConfig<PreferReadonlyOptions>;

/**
 * Requires that private members are marked as `readonly` if they're never modified outside of the constructor.
 *
 * @see [prefer-readonly](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-readonly.md)
 */
export interface PreferReadonlyRule {
  /**
   * Requires that private members are marked as `readonly` if they're never modified outside of the constructor.
   *
   * @see [prefer-readonly](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-readonly.md)
   */
  '@typescript-eslint/prefer-readonly': PreferReadonlyRuleConfig;
}
