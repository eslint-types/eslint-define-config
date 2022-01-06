import type { RuleConfig } from '../rule-config';

/**
 * Enforce that `this` is used when only `this` type is returned.
 *
 * @see [prefer-return-this-type](https://typescript-eslint.io/rules/prefer-return-this-type)
 */
export type PreferReturnThisTypeRuleConfig = RuleConfig<[]>;

/**
 * Enforce that `this` is used when only `this` type is returned.
 *
 * @see [prefer-return-this-type](https://typescript-eslint.io/rules/prefer-return-this-type)
 */
export interface PreferReturnThisTypeRule {
  /**
   * Enforce that `this` is used when only `this` type is returned.
   *
   * @see [prefer-return-this-type](https://typescript-eslint.io/rules/prefer-return-this-type)
   */
  '@typescript-eslint/prefer-return-this-type': PreferReturnThisTypeRuleConfig;
}
