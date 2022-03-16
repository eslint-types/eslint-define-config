import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnpublishedImportOption {
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
        }[],
      ];
  resolvePaths?: string[];
  tryExtensions?: string[];
}

/**
 * Options.
 */
export type NoUnpublishedImportOptions = [NoUnpublishedImportOption?];

/**
 * Disallow `import` declarations which import private modules.
 *
 * @see [no-unpublished-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-import.md)
 */
export type NoUnpublishedImportRuleConfig =
  RuleConfig<NoUnpublishedImportOptions>;

/**
 * Disallow `import` declarations which import private modules.
 *
 * @see [no-unpublished-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-import.md)
 */
export interface NoUnpublishedImportRule {
  /**
   * Disallow `import` declarations which import private modules.
   *
   * @see [no-unpublished-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-import.md)
   */
  'node/no-unpublished-import': NoUnpublishedImportRuleConfig;
}
