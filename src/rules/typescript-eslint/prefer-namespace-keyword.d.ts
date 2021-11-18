import type { RuleConfig } from '../rule-config';

/**
 * Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules.
 *
 * @see [prefer-namespace-keyword](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md)
 */
export type PreferNamespaceKeywordRuleConfig = RuleConfig<[]>;

/**
 * Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules.
 *
 * @see [prefer-namespace-keyword](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md)
 */
export interface PreferNamespaceKeywordRule {
  /**
   * Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules.
   *
   * @see [prefer-namespace-keyword](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md)
   */
  '@typescript-eslint/prefer-namespace-keyword': PreferNamespaceKeywordRuleConfig;
}
