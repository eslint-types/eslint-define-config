import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExtraneousImportOption {
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
  resolvePaths?: string[];
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
