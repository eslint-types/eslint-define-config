import type { RuleConfig } from '../rule-config';

/**
 * Disallow labels that share a name with a variable.
 *
 * @see [no-label-var](https://eslint.org/docs/latest/rules/no-label-var)
 */
export type NoLabelVarRuleConfig = RuleConfig<[]>;

/**
 * Disallow labels that share a name with a variable.
 *
 * @see [no-label-var](https://eslint.org/docs/latest/rules/no-label-var)
 */
export interface NoLabelVarRule {
  /**
   * Disallow labels that share a name with a variable.
   *
   * @see [no-label-var](https://eslint.org/docs/latest/rules/no-label-var)
   */
  'no-label-var': NoLabelVarRuleConfig;
}
