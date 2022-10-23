import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NamespaceOption {
  /**
   * If `false`, will report computed (and thus, un-lintable) references to namespace members.
   */
  allowComputed?: boolean;
}

/**
 * Options.
 */
export type NamespaceOptions = [NamespaceOption?];

/**
 *
 * @see [namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/namespace.md)
 */
export type NamespaceRuleConfig = RuleConfig<NamespaceOptions>;

/**
 *
 * @see [namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/namespace.md)
 */
export interface NamespaceRule {
  /**
   *
   * @see [namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/namespace.md)
   */
  'import/namespace': NamespaceRuleConfig;
}
