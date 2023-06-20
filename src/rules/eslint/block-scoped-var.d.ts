import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of variables within the scope they are defined.
 *
 * @see [block-scoped-var](https://eslint.org/docs/latest/rules/block-scoped-var)
 */
export type BlockScopedVarRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of variables within the scope they are defined.
 *
 * @see [block-scoped-var](https://eslint.org/docs/latest/rules/block-scoped-var)
 */
export interface BlockScopedVarRule {
  /**
   * Enforce the use of variables within the scope they are defined.
   *
   * @see [block-scoped-var](https://eslint.org/docs/latest/rules/block-scoped-var)
   */
  'block-scoped-var': BlockScopedVarRuleConfig;
}
