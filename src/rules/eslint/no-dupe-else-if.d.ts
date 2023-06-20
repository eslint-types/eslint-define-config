import type { RuleConfig } from '../rule-config';

/**
 * Disallow duplicate conditions in if-else-if chains.
 *
 * @see [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if)
 */
export type NoDupeElseIfRuleConfig = RuleConfig<[]>;

/**
 * Disallow duplicate conditions in if-else-if chains.
 *
 * @see [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if)
 */
export interface NoDupeElseIfRule {
  /**
   * Disallow duplicate conditions in if-else-if chains.
   *
   * @see [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if)
   */
  'no-dupe-else-if': NoDupeElseIfRuleConfig;
}
