import type { RuleConfig } from '../rule-config';

/**
 * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules.
 *
 * @see [prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)
 */
export type PreferNamespaceKeywordRuleConfig = RuleConfig<[]>;

/**
 * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules.
 *
 * @see [prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)
 */
export interface PreferNamespaceKeywordRule {
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules.
   *
   * @see [prefer-namespace-keyword](https://typescript-eslint.io/rules/prefer-namespace-keyword)
   */
  '@typescript-eslint/prefer-namespace-keyword': PreferNamespaceKeywordRuleConfig;
}
