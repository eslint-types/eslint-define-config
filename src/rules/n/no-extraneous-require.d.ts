import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExtraneousRequireOption {
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
export type NoExtraneousRequireOptions = [NoExtraneousRequireOption?];

/**
 * Disallow `require()` expressions which import extraneous modules.
 *
 * @see [no-extraneous-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-extraneous-require.md)
 */
export type NoExtraneousRequireRuleConfig =
  RuleConfig<NoExtraneousRequireOptions>;

/**
 * Disallow `require()` expressions which import extraneous modules.
 *
 * @see [no-extraneous-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-extraneous-require.md)
 */
export interface NoExtraneousRequireRule {
  /**
   * Disallow `require()` expressions which import extraneous modules.
   *
   * @see [no-extraneous-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-extraneous-require.md)
   */
  'n/no-extraneous-require': NoExtraneousRequireRuleConfig;
}
