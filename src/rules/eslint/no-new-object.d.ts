import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Disallow `Object` constructors.
 *
 * @see [no-new-object](https://eslint.org/docs/latest/rules/no-new-object)
 */
export type NoNewObjectRuleConfig = RuleConfig<[]>;

/**
 * Disallow `Object` constructors.
 *
 * @see [no-new-object](https://eslint.org/docs/latest/rules/no-new-object)
 */
export interface NoNewObjectRule {
  /**
   * Disallow `Object` constructors.
   *
   * @see [no-new-object](https://eslint.org/docs/latest/rules/no-new-object)
   */
  'no-new-object': NoNewObjectRuleConfig;
}
