import type { RuleConfig } from '../rule-config';

/**
 * Disallow unused labels.
 *
 * @see [no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels)
 */
export type NoUnusedLabelsRuleConfig = RuleConfig<[]>;

/**
 * Disallow unused labels.
 *
 * @see [no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels)
 */
export interface NoUnusedLabelsRule {
  /**
   * Disallow unused labels.
   *
   * @see [no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels)
   */
  'no-unused-labels': NoUnusedLabelsRuleConfig;
}
