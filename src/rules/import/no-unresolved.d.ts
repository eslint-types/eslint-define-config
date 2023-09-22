import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnresolvedOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
  caseSensitive?: boolean;
  caseSensitiveStrict?: boolean;
}

/**
 * Options.
 */
export type NoUnresolvedOptions = [NoUnresolvedOption?];

/**
 * Ensure imports point to a file/module that can be resolved.
 *
 * @see [no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-unresolved.md)
 */
export type NoUnresolvedRuleConfig = RuleConfig<NoUnresolvedOptions>;

/**
 * Ensure imports point to a file/module that can be resolved.
 *
 * @see [no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-unresolved.md)
 */
export interface NoUnresolvedRule {
  /**
   * Ensure imports point to a file/module that can be resolved.
   *
   * @see [no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-unresolved.md)
   */
  'import/no-unresolved': NoUnresolvedRuleConfig;
}
