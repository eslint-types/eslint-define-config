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
 * Suggest correct usage of shebang.
 *
 * @see [shebang](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/shebang.md)
 */
export type ShebangRuleConfig = RuleConfig<ShebangOptions>;

/**
 * Suggest correct usage of shebang.
 *
 * @see [shebang](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/shebang.md)
 */
export interface ShebangRule {
  /**
   * Suggest correct usage of shebang.
   *
   * @see [shebang](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/shebang.md)
   */
  'node/shebang': ShebangRuleConfig;
}
