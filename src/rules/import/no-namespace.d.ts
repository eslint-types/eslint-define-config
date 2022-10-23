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
 *
 * @see [no-namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-namespace.md)
 */
export type NoNamespaceRuleConfig = RuleConfig<NoNamespaceOptions>;

/**
 *
 * @see [no-namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-namespace.md)
 */
export interface NoNamespaceRule {
  /**
   *
   * @see [no-namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-namespace.md)
   */
  'import/no-namespace': NoNamespaceRuleConfig;
}
