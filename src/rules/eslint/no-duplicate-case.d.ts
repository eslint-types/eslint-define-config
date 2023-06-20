import type { RuleConfig } from '../rule-config';

/**
 * Disallow duplicate case labels.
 *
 * @see [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case)
 */
export type NoDuplicateCaseRuleConfig = RuleConfig<[]>;

/**
 * Disallow duplicate case labels.
 *
 * @see [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case)
 */
export interface NoDuplicateCaseRule {
  /**
   * Disallow duplicate case labels.
   *
   * @see [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case)
   */
  'no-duplicate-case': NoDuplicateCaseRuleConfig;
}
