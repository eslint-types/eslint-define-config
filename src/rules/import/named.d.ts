import type { RuleConfig } from '../rule-config';

/**
 * Verifies that all named imports are part of the set of named exports in the referenced module.
 *
 * @see [named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)
 */
export type NamedRuleConfig = RuleConfig<[]>;

/**
 * Verifies that all named imports are part of the set of named exports in the referenced module.
 *
 * @see [named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)
 */
export interface NamedRule {
  /**
   * Verifies that all named imports are part of the set of named exports in the referenced module.
   *
   * @see [named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)
   */
  'import/named': NamedRuleConfig;
}
