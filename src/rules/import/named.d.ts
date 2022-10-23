import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NamedOption {
  commonjs?: boolean;
}

/**
 * Options.
 */
export type NamedOptions = [NamedOption?];

/**
 *
 * @see [named](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/named.md)
 */
export type NamedRuleConfig = RuleConfig<NamedOptions>;

/**
 *
 * @see [named](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/named.md)
 */
export interface NamedRule {
  /**
   *
   * @see [named](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/named.md)
   */
  'import/named': NamedRuleConfig;
}
