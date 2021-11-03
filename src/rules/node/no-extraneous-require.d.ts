import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExtraneousRequireOption {
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
export type NoExtraneousRequireOptions = [NoExtraneousRequireOption?];

/**
 * Disallow `require()` expressions which import extraneous modules.
 *
 * @see [no-extraneous-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-extraneous-require.md)
 */
export type NoExtraneousRequireRuleConfig = RuleConfig<NoExtraneousRequireOptions>;

/**
 * Disallow `require()` expressions which import extraneous modules.
 *
 * @see [no-extraneous-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-extraneous-require.md)
 */
export interface NoExtraneousRequireRule {
  /**
   * Disallow `require()` expressions which import extraneous modules.
   *
   * @see [no-extraneous-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-extraneous-require.md)
   */
  'node/no-extraneous-require': NoExtraneousRequireRuleConfig;
}
