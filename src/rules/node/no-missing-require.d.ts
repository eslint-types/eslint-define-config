import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMissingRequireOption {
  /**
   * Some platforms have additional embedded modules. For example, Electron has `electron` module.
   *
   * @default []
   *
   * @see [allowModules](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md#allowmodules)
   */
  allowModules?: string[];
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
}

/**
 * Options.
 */
export type NoMissingRequireOptions = [NoMissingRequireOption?];

/**
 * Disallow `require()` expressions which import non-existence modules.
 *
 * @see [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-require.md)
 */
export type NoMissingRequireRuleConfig = RuleConfig<NoMissingRequireOptions>;

/**
 * Disallow `require()` expressions which import non-existence modules.
 *
 * @see [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-require.md)
 */
export interface NoMissingRequireRule {
  /**
   * Disallow `require()` expressions which import non-existence modules.
   *
   * @see [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-require.md)
   */
  'node/no-missing-require': NoMissingRequireRuleConfig;
}
