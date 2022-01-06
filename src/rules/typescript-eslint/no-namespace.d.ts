import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoNamespaceOption {
  allowDeclarations?: boolean;
  allowDefinitionFiles?: boolean;
}

/**
 * Options.
 */
export type NoNamespaceOptions = [NoNamespaceOption?];

/**
 * Disallow the use of custom TypeScript modules and namespaces.
 *
 * @see [no-namespace](https://typescript-eslint.io/rules/no-namespace)
 */
export type NoNamespaceRuleConfig = RuleConfig<NoNamespaceOptions>;

/**
 * Disallow the use of custom TypeScript modules and namespaces.
 *
 * @see [no-namespace](https://typescript-eslint.io/rules/no-namespace)
 */
export interface NoNamespaceRule {
  /**
   * Disallow the use of custom TypeScript modules and namespaces.
   *
   * @see [no-namespace](https://typescript-eslint.io/rules/no-namespace)
   */
  '@typescript-eslint/no-namespace': NoNamespaceRuleConfig;
}
