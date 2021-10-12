import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferReadonlyOption {
  /**
   * You may pass `"onlyInlineLambdas": true` as a rule option within an object to restrict checking only to members immediately assigned a lambda value.
   *
   * @see [onlyInlineLambdas](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md#onlyinlinelambdas)
   */
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
 * @see [prefer-readonly](https://github.com/typescript-eslint/typescript-eslint/blob/v5.0.0/packages/eslint-plugin/docs/rules/prefer-readonly.md)
 */
export type PreferReadonlyRuleConfig = RuleConfig<PreferReadonlyOptions>;

/**
 * Requires that private members are marked as `readonly` if they're never modified outside of the constructor.
 *
 * @see [prefer-readonly](https://github.com/typescript-eslint/typescript-eslint/blob/v5.0.0/packages/eslint-plugin/docs/rules/prefer-readonly.md)
 */
export interface PreferReadonlyRule {
  /**
   * Requires that private members are marked as `readonly` if they're never modified outside of the constructor.
   *
   * @see [prefer-readonly](https://github.com/typescript-eslint/typescript-eslint/blob/v5.0.0/packages/eslint-plugin/docs/rules/prefer-readonly.md)
   */
  '@typescript-eslint/prefer-readonly': PreferReadonlyRuleConfig;
}
