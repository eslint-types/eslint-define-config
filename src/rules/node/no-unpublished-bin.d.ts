import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnpublishedBinOption {
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
  [k: string]: any;
}

/**
 * Options.
 */
export type NoUnpublishedBinOptions = [NoUnpublishedBinOption?];

/**
 * Disallow `bin` files that npm ignores.
 *
 * @see [no-unpublished-bin](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-bin.md)
 */
export type NoUnpublishedBinRuleConfig = RuleConfig<NoUnpublishedBinOptions>;

/**
 * Disallow `bin` files that npm ignores.
 *
 * @see [no-unpublished-bin](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-bin.md)
 */
export interface NoUnpublishedBinRule {
  /**
   * Disallow `bin` files that npm ignores.
   *
   * @see [no-unpublished-bin](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-bin.md)
   */
  'node/no-unpublished-bin': NoUnpublishedBinRuleConfig;
}
