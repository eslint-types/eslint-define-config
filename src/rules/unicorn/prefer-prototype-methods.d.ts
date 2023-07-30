import type { RuleConfig } from '../rule-config';

/**
 * Prefer borrowing methods from the prototype instead of the instance.
 *
 * @see [prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-prototype-methods.md)
 */
export type PreferPrototypeMethodsRuleConfig = RuleConfig<[]>;

/**
 * Prefer borrowing methods from the prototype instead of the instance.
 *
 * @see [prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-prototype-methods.md)
 */
export interface PreferPrototypeMethodsRule {
  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   *
   * @see [prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-prototype-methods.md)
   */
  'unicorn/prefer-prototype-methods': PreferPrototypeMethodsRuleConfig;
}
