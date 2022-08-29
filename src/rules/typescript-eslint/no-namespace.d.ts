import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoNamespaceOption {
  /**
   * Whether to allow `declare` with custom TypeScript namespaces.
   */
  allowDeclarations?: boolean;
  /**
   * Whether to allow `declare` with custom TypeScript namespaces inside definition files.
   */
  allowDefinitionFiles?: boolean;
}

/**
 * Options.
 */
export type NoNamespaceOptions = [NoNamespaceOption?];

/**
 * Disallow custom TypeScript modules and namespaces.
 *
 * @see [no-namespace](https://typescript-eslint.io/rules/no-namespace)
 */
export type NoNamespaceRuleConfig = RuleConfig<NoNamespaceOptions>;

/**
 * Disallow custom TypeScript modules and namespaces.
 *
 * @see [no-namespace](https://typescript-eslint.io/rules/no-namespace)
 */
export interface NoNamespaceRule {
  /**
   * Disallow custom TypeScript modules and namespaces.
   *
   * @see [no-namespace](https://typescript-eslint.io/rules/no-namespace)
   */
  '@typescript-eslint/no-namespace': NoNamespaceRuleConfig;
}
