import type { RuleConfig } from '../rule-config';

/**
 * Enforce that `this` is used when only `this` type is returned.
 *
 * @see [prefer-return-this-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-return-this-type.md)
 */
export type PreferReturnThisTypeRuleConfig = RuleConfig<[]>;

/**
 * Enforce that `this` is used when only `this` type is returned.
 *
 * @see [prefer-return-this-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-return-this-type.md)
 */
export interface PreferReturnThisTypeRule {
  /**
   * Enforce that `this` is used when only `this` type is returned.
   *
   * @see [prefer-return-this-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-return-this-type.md)
   */
  '@typescript-eslint/prefer-return-this-type': PreferReturnThisTypeRuleConfig;
}
