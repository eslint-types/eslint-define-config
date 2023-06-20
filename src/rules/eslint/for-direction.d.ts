import type { RuleConfig } from '../rule-config';

/**
 * Enforce "for" loop update clause moving the counter in the right direction.
 *
 * @see [for-direction](https://eslint.org/docs/latest/rules/for-direction)
 */
export type ForDirectionRuleConfig = RuleConfig<[]>;

/**
 * Enforce "for" loop update clause moving the counter in the right direction.
 *
 * @see [for-direction](https://eslint.org/docs/latest/rules/for-direction)
 */
export interface ForDirectionRule {
  /**
   * Enforce "for" loop update clause moving the counter in the right direction.
   *
   * @see [for-direction](https://eslint.org/docs/latest/rules/for-direction)
   */
  'for-direction': ForDirectionRuleConfig;
}
