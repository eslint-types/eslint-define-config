import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoMissingRequireOption = {
  /**
   * Some platforms have additional embedded modules. For example, Electron has `electron` module.
   *
   * @default []
   *
   * @see [allowModules](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md#allowmodules)
   */
  allowModules?: string[];
  /**
   * Adds additional paths to try for when resolving a require.
   *
   * If a path is relative, it will be resolved from CWD.
   *
   * @default []
   *
   * @see [resolvePaths](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md#resolvepaths)
   */
  resolvePaths?: string[];
  /**
   * When an import path does not exist, this rule checks whether or not any of `path.js`, `path.json`, and `path.node` exists.
   *
   * `tryExtensions` option is the extension list this rule uses at the time.
   *
   * @default ['.js', '.json', '.node']
   *
   * @see [tryExtensions](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md#tryextensions)
   */
  tryExtensions?: string[];
};

/**
 * Options.
 */
export type NoMissingRequireOptions = [NoMissingRequireOption?];

/**
 * This rule checks the file paths of `require()`s, then reports the path of files which don't exist..
 *
 * @see [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md)
 */
export type NoMissingRequireRuleConfig = RuleConfig<NoMissingRequireOptions>;

/**
 * This rule checks the file paths of `require()`s, then reports the path of files which don't exist..
 *
 * @see [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md)
 */
export interface NoMissingRequireRule {
  /**
   * This rule checks the file paths of `require()`s, then reports the path of files which don't exist..
   *
   * @see [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md)
   */
  'node/no-missing-require': NoMissingRequireRuleConfig;
}
