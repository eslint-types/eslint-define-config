import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Option.
 */
export interface NoExtraneousImportOption {
  allowModules?: string[];
  convertPath?:
    | {
        /**
         * @minItems 2
         * @maxItems 2
         *
         */
        [k: string]: [string, string];
      }
    | [
        {
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        },
        ...{
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        }[],
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
export type NoExtraneousImportRuleConfig =
  RuleConfig<NoExtraneousImportOptions>;

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
