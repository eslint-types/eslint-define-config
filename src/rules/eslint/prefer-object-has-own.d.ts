import type { RuleConfig } from '../rule-config';

/**
 * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`.
 *
 * @see [prefer-object-has-own](https://eslint.org/docs/latest/rules/prefer-object-has-own)
 */
export type PreferObjectHasOwnRuleConfig = RuleConfig<[]>;

/**
 * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`.
 *
 * @see [prefer-object-has-own](https://eslint.org/docs/latest/rules/prefer-object-has-own)
 */
export interface PreferObjectHasOwnRule {
  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`.
   *
   * @see [prefer-object-has-own](https://eslint.org/docs/latest/rules/prefer-object-has-own)
   */
  'prefer-object-has-own': PreferObjectHasOwnRuleConfig;
}
