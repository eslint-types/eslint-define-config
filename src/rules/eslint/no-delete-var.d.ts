import type { RuleConfig } from '../rule-config';

/**
 * Disallow deleting variables.
 *
 * @see [no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var)
 */
export type NoDeleteVarRuleConfig = RuleConfig<[]>;

/**
 * Disallow deleting variables.
 *
 * @see [no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var)
 */
export interface NoDeleteVarRule {
  /**
   * Disallow deleting variables.
   *
   * @see [no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var)
   */
  'no-delete-var': NoDeleteVarRuleConfig;
}
