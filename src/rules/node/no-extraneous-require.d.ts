import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoExtraneousRequireOption = {
  /**
   * Some platforms have additional embedded modules. For example, Electron has `electron` module.
   *
   * @default []
   *
   * @see [allowModules](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md#allowmodules)
   */
  allowModules?: string[];
  /**
   * Adds additional paths to try for when resolving a require.
   *
   * If a path is relative, it will be resolved from CWD.
   *
   * @default []
   *
   * @see [resolvePaths](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md#resolvepaths)
   */
  resolvePaths?: string[];
  /**
   * When an import path does not exist, this rule checks whether or not any of `path.js`, `path.json`, and `path.node` exists.
   *
   * `tryExtensions` option is the extension list this rule uses at the time.
   *
   * @default ['.js', '.json', '.node']
   *
   * @see [tryExtensions](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md#tryextensions)
   */
  tryExtensions?: string[];
};

/**
 * Options.
 */
export type NoExtraneousRequireOptions = [NoExtraneousRequireOption?];

/**
 * This rule warns `require()` of extraneous modules.
 *
 * @see [no-extraneous-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md)
 */
export type NoExtraneousRequireRuleConfig = RuleConfig<NoExtraneousRequireOptions>;

/**
 * This rule warns `require()` of extraneous modules.
 *
 * @see [no-extraneous-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md)
 */
export interface NoExtraneousRequireRule {
  /**
   * This rule warns `require()` of extraneous modules.
   *
   * @see [no-extraneous-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md)
   */
  'node/no-extraneous-require': NoExtraneousRequireRuleConfig;
}
