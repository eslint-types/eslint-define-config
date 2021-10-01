import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExtraneousImportOption {
  /**
   * Some platforms have additional embedded modules. For example, Electron has `electron` module.
   *
   * @default []
   *
   * @see [allowModules](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md#allowmodules)
   */
  allowModules?: string[];
  convertPath?:
    | {
        [k: string]: [string, string];
      }
    | [
        {
          include: [string, ...string[]];
          exclude?: string[];
          replace: [string, string];
        },
        ...{
          include: [string, ...string[]];
          exclude?: string[];
          replace: [string, string];
        }[]
      ];
  /**
   * Adds additional paths to try for when resolving imports.
   *
   * If a path is relative, it will be resolved from CWD.
   *
   * @default []
   *
   * @see [resolvePaths](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md#resolvepaths)
   */
  resolvePaths?: string[];
  /**
   * When an import path does not exist, this rule checks whether or not any of `path.js`, `path.json`, and `path.node` exists.
   *
   * `tryExtensions` option is the extension list this rule uses at the time.
   *
   * @default ['.js', '.json', '.node']
   *
   * @see [tryExtensions](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md#tryextensions)
   */
  tryExtensions?: string[];
}

/**
 * Options.
 */
export type NoExtraneousImportOptions = [NoExtraneousImportOption?];

/**
 * Disallow `import` declarations which import extraneous modules.
 *
 * @see [no-extraneous-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-extraneous-import.md)
 */
export type NoExtraneousImportRuleConfig = RuleConfig<NoExtraneousImportOptions>;

/**
 * Disallow `import` declarations which import extraneous modules.
 *
 * @see [no-extraneous-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-extraneous-import.md)
 */
export interface NoExtraneousImportRule {
  /**
   * Disallow `import` declarations which import extraneous modules.
   *
   * @see [no-extraneous-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-extraneous-import.md)
   */
  'node/no-extraneous-import': NoExtraneousImportRuleConfig;
}
