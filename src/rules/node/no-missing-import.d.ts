import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMissingImportOption {
  /**
   * Some platforms have additional embedded modules. For example, Electron has `electron` module.
   *
   * @default []
   *
   * @see [allowModules](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md#allowmodules)
   */
  allowModules?: string[];
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
}

/**
 * Options.
 */
export type NoMissingImportOptions = [NoMissingImportOption?];

/**
 * Disallow `import` declarations which import non-existence modules.
 *
 * @see [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-import.md)
 */
export type NoMissingImportRuleConfig = RuleConfig<NoMissingImportOptions>;

/**
 * Disallow `import` declarations which import non-existence modules.
 *
 * @see [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-import.md)
 */
export interface NoMissingImportRule {
  /**
   * Disallow `import` declarations which import non-existence modules.
   *
   * @see [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-import.md)
   */
  'node/no-missing-import': NoMissingImportRuleConfig;
}
