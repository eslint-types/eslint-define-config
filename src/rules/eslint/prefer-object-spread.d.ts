import type { RuleConfig } from '../rule-config';

/**
 * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
 *
 * @see [prefer-object-spread](https://eslint.org/docs/latest/rules/prefer-object-spread)
 */
export type PreferObjectSpreadRuleConfig = RuleConfig<[]>;

/**
 * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
 *
 * @see [prefer-object-spread](https://eslint.org/docs/latest/rules/prefer-object-spread)
 */
export interface PreferObjectSpreadRule {
  /**
   * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
   *
   * @see [prefer-object-spread](https://eslint.org/docs/latest/rules/prefer-object-spread)
   */
  'prefer-object-spread': PreferObjectSpreadRuleConfig;
}
