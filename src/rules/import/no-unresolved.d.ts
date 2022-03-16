import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnresolvedOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  ignore?: [string, ...string[]];
  caseSensitive?: boolean;
  caseSensitiveStrict?: boolean;
}

/**
 * Options.
 */
export type NoUnresolvedOptions = [NoUnresolvedOption?];

/**
 *
 *
 * @see [no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-unresolved.md)
 */
export type NoUnresolvedRuleConfig = RuleConfig<NoUnresolvedOptions>;

/**
 *
 *
 * @see [no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-unresolved.md)
 */
export interface NoUnresolvedRule {
  /**
   *
   *
   * @see [no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-unresolved.md)
   */
  'import/no-unresolved': NoUnresolvedRuleConfig;
}
