import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoMissingImportOption = {
  /**
   * Some platforms have additional embedded modules. For example, Electron has `electron` module.
   *
   * @default []
   *
   * @see [allowModules](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md#allowmodules)
   */
  allowModules?: string[];
  /**
   * Adds additional paths to try for when resolving imports.
   *
   * If a path is relative, it will be resolved from CWD.
   *
   * @default []
   *
   * @see [resolvePaths](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md#resolvepaths)
   */
  resolvePaths?: string[];
  /**
   * When an import path does not exist, this rule checks whether or not any of `path.js`, `path.json`, and `path.node` exists.
   *
   * `tryExtensions` option is the extension list this rule uses at the time.
   *
   * @default ['.js', '.json', '.node']
   *
   * @see [tryExtensions](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md#tryextensions)
   */
  tryExtensions?: string[];
};

/**
 * Options.
 */
export type NoMissingImportOptions = [NoMissingImportOption?];

/**
 * This is similar to [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md), but this rule handles import and export declarations.
 *
 * @see [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md)
 */
export type NoMissingImportRuleConfig = RuleConfig<NoMissingImportOptions>;

/**
 * This is similar to [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md), but this rule handles import and export declarations.
 *
 * @see [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md)
 */
export interface NoMissingImportRule {
  /**
   * This is similar to [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md), but this rule handles import and export declarations.
   *
   * @see [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md)
   */
  'node/no-missing-import': NoMissingImportRuleConfig;
}
