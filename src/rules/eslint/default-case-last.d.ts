import type { RuleConfig } from '../rule-config';

/**
 * Enforce default clauses in switch statements to be last.
 *
 * @see [default-case-last](https://eslint.org/docs/latest/rules/default-case-last)
 */
export type DefaultCaseLastRuleConfig = RuleConfig<[]>;

/**
 * Enforce default clauses in switch statements to be last.
 *
 * @see [default-case-last](https://eslint.org/docs/latest/rules/default-case-last)
 */
export interface DefaultCaseLastRule {
  /**
   * Enforce default clauses in switch statements to be last.
   *
   * @see [default-case-last](https://eslint.org/docs/latest/rules/default-case-last)
   */
  'default-case-last': DefaultCaseLastRuleConfig;
}
