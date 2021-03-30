import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type NoUnresolvedConfig = {
  /**
   * If `true` is provided, single-argument `require` calls will be resolved.
   *
   * @default false
   *
   * @see [commonjs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md#options)
   */
  commonjs?: boolean;
  /**
   * If `true` is provided, dependency paths for `define` and `require` calls will be resolved.
   *
   * @default false
   *
   * @see [amd](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md#options)
   */
  amd?: boolean;
  /**
   * @see [ignore](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md#ignore)
   */
  ignore?: string[];
  /**
   * By default, this rule will report paths whose case do not match the underlying filesystem path, if the FS is not case-sensitive.
   *
   * @default true
   *
   * @see [caseSensitive](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md#casesensitive)
   */
  caseSensitive?: boolean;
};

/**
 * Options.
 */
export type NoUnresolvedOptions = [number?, NoUnresolvedConfig?];

/**
 * Ensures an imported module can be resolved to a module on the local filesystem, as defined by standard Node `require.resolve` behavior.
 *
 * @see [no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)
 */
export type NoUnresolvedRuleConfig = RuleConfig<NoUnresolvedOptions>;

/**
 * Ensures an imported module can be resolved to a module on the local filesystem, as defined by standard Node `require.resolve` behavior.
 *
 * @see [no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)
 */
export interface NoUnresolvedRule {
  /**
   * Ensures an imported module can be resolved to a module on the local filesystem, as defined by standard Node `require.resolve` behavior.
   *
   * @see [no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)
   */
  'import/no-unresolved': NoUnresolvedRuleConfig;
}
