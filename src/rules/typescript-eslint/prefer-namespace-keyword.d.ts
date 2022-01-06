import type { RuleConfig } from '../rule-config';

/**
 * Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules.
 *
 * @see [prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)
 */
export type PreferNamespaceKeywordRuleConfig = RuleConfig<[]>;

/**
 * Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules.
 *
 * @see [prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)
 */
export interface PreferNamespaceKeywordRule {
  /**
   * Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules.
   *
   * @see [prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)
   */
  '@typescript-eslint/prefer-namespace-keyword': PreferNamespaceKeywordRuleConfig;
}
