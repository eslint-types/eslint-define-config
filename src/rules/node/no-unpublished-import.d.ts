import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUnpublishedImportOption = {
  /**
   * Some platforms have additional embedded modules. For example, Electron has `electron` module.
   *
   * @see [allowModules](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md#allowmodules)
   */
  allowModules?: [];
  /**
   * Some platforms have additional embedded modules. For example, Electron has `electron` module.
   *
   * @see [convertPath](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md#convertpath)
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
   * @see [tryExtensions](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md#tryextensions)
   */
  tryExtensions?: string[];
};

/**
 * Options.
 */
export type NoUnpublishedImportOptions = [NoUnpublishedImportOption?];

/**
 * If a source code file satisfies all of the following conditions, the file is *published*.
 *
 * - `"files"` field of `package.json` includes the file or `"files"` field of `package.json` does not exist.
 * - `.npmignore` does not include the file.
 *
 * Then this rule warns `import` declarations in *published* files if the `import` declaration imports *unpublished* files or the packages of `devDependencies`.
 *
 * @see [no-unpublished-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md)
 */
export type NoUnpublishedImportRuleConfig = RuleConfig<NoUnpublishedImportOptions>;

/**
 * If a source code file satisfies all of the following conditions, the file is *published*.
 *
 * - `"files"` field of `package.json` includes the file or `"files"` field of `package.json` does not exist.
 * - `.npmignore` does not include the file.
 *
 * Then this rule warns `import` declarations in *published* files if the `import` declaration imports *unpublished* files or the packages of `devDependencies`.
 *
 * @see [no-unpublished-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md)
 */
export interface NoUnpublishedImportRule {
  /**
   * If a source code file satisfies all of the following conditions, the file is *published*.
   *
   * - `"files"` field of `package.json` includes the file or `"files"` field of `package.json` does not exist.
   * - `.npmignore` does not include the file.
   *
   * Then this rule warns `import` declarations in *published* files if the `import` declaration imports *unpublished* files or the packages of `devDependencies`.
   *
   * @see [no-unpublished-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md)
   */
  'node/no-unpublished-import': NoUnpublishedImportRuleConfig;
}
