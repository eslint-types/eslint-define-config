import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUnpublishedRequireOption = {
  /**
   * Some platforms have additional embedded modules. For example, Electron has `electron` module.
   *
   * @see [allowModules](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md#allowmodules)
   */
  allowModules?: [];
  /**
   * Some platforms have additional embedded modules. For example, Electron has `electron` module.
   *
   * @see [convertPath](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md#convertpath)
   */
  convertPath?:
    | Record<string, [fromRegExp: string, toString: string]>
    | { include: string[]; exclude: string[]; replace: [fromRegExp: string, toString: string] };
  /**
   * When an import path does not exist, this rule checks whether or not any of `path.js`, `path.json`, and `path.node` exists.
   *
   * `tryExtensions` option is the extension list this rule uses at the time.
   *
   * @default ['.js', '.json', '.node']
   *
   * @see [tryExtensions](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md#tryextensions)
   */
  tryExtensions?: string[];
};

/**
 * Options.
 */
export type NoUnpublishedRequireOptions = [NoUnpublishedRequireOption?];

/**
 * If a source code file satisfies all of the following conditions, the file is *published*.
 *
 * - `"files"` field of `package.json` includes the file or `"files"` field of `package.json` does not exist.
 * - `.npmignore` does not include the file.
 *
 * Then this rule warns `require()` expressions in *published* files if the `require()` expression imports *unpublished* files or the packages of `devDependencies`.
 *
 * @see [no-unpublished-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md)
 */
export type NoUnpublishedRequireRuleConfig = RuleConfig<NoUnpublishedRequireOptions>;

/**
 * If a source code file satisfies all of the following conditions, the file is *published*.
 *
 * - `"files"` field of `package.json` includes the file or `"files"` field of `package.json` does not exist.
 * - `.npmignore` does not include the file.
 *
 * Then this rule warns `require()` expressions in *published* files if the `require()` expression imports *unpublished* files or the packages of `devDependencies`.
 *
 * @see [no-unpublished-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md)
 */
export interface NoUnpublishedRequireRule {
  /**
   * If a source code file satisfies all of the following conditions, the file is *published*.
   *
   * - `"files"` field of `package.json` includes the file or `"files"` field of `package.json` does not exist.
   * - `.npmignore` does not include the file.
   *
   * Then this rule warns `require()` expressions in *published* files if the `require()` expression imports *unpublished* files or the packages of `devDependencies`.
   *
   * @see [no-unpublished-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md)
   */
  'node/no-unpublished-require': NoUnpublishedRequireRuleConfig;
}
