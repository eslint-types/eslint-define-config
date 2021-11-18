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
 * @see [no-namespace](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-namespace.md)
 */
export type NoNamespaceRuleConfig = RuleConfig<NoNamespaceOptions>;

/**
 * Disallow the use of custom TypeScript modules and namespaces.
 *
 * @see [no-namespace](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-namespace.md)
 */
export interface NoNamespaceRule {
  /**
   * Disallow the use of custom TypeScript modules and namespaces.
   *
   * @see [no-namespace](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-namespace.md)
   */
  '@typescript-eslint/no-namespace': NoNamespaceRuleConfig;
}
