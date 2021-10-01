import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ShebangOption {
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
