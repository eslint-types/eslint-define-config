import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ShebangOption {
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
}

/**
 * Options.
 */
export type ShebangOptions = [ShebangOption?];

/**
 * Require correct usage of shebang.
 *
 * @see [shebang](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/shebang.md)
 */
export type ShebangRuleConfig = RuleConfig<ShebangOptions>;

/**
 * Require correct usage of shebang.
 *
 * @see [shebang](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/shebang.md)
 */
export interface ShebangRule {
  /**
   * Require correct usage of shebang.
   *
   * @see [shebang](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/shebang.md)
   */
  'n/shebang': ShebangRuleConfig;
}
