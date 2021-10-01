import type { RuleConfig } from '../rule-config';

/**
 * Disallow `Object` constructors.
 *
 * @see [no-new-object](https://eslint.org/docs/rules/no-new-object)
 */
export type NoNewObjectRuleConfig = RuleConfig<[]>;

/**
 * Disallow `Object` constructors.
 *
 * @see [no-new-object](https://eslint.org/docs/rules/no-new-object)
 */
export interface NoNewObjectRule {
  /**
   * Disallow `Object` constructors.
   *
   * @see [no-new-object](https://eslint.org/docs/rules/no-new-object)
   */
  'no-new-object': NoNewObjectRuleConfig;
}
