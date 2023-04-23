import type { RuleConfig } from '../rule-config';

/**
 * Enforce that namespaces are not used in React elements.
 *
 * @see [no-namespace](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-namespace.md)
 */
export type NoNamespaceRuleConfig = RuleConfig<[]>;

/**
 * Enforce that namespaces are not used in React elements.
 *
 * @see [no-namespace](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-namespace.md)
 */
export interface NoNamespaceRule {
  /**
   * Enforce that namespaces are not used in React elements.
   *
   * @see [no-namespace](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-namespace.md)
   */
  'react/no-namespace': NoNamespaceRuleConfig;
}
