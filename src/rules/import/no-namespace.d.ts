import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoNamespaceOption {
  ignore?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type NoNamespaceOptions = [NoNamespaceOption?];

/**
 * Forbid namespace (a.k.a. "wildcard" `*`) imports.
 *
 * @see [no-namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-namespace.md)
 */
export type NoNamespaceRuleConfig = RuleConfig<NoNamespaceOptions>;

/**
 * Forbid namespace (a.k.a. "wildcard" `*`) imports.
 *
 * @see [no-namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-namespace.md)
 */
export interface NoNamespaceRule {
  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   *
   * @see [no-namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-namespace.md)
   */
  'import/no-namespace': NoNamespaceRuleConfig;
}
