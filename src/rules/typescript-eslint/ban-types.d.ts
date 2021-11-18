import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface BanTypesOption {
  types?: {
    [k: string]:
      | null
      | boolean
      | string
      | {
          message?: string;
          fixWith?: string;
        };
  };
  extendDefaults?: boolean;
}

/**
 * Options.
 */
export type BanTypesOptions = [BanTypesOption?];

/**
 * Bans specific types from being used.
 *
 * @see [ban-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/ban-types.md)
 */
export type BanTypesRuleConfig = RuleConfig<BanTypesOptions>;

/**
 * Bans specific types from being used.
 *
 * @see [ban-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/ban-types.md)
 */
export interface BanTypesRule {
  /**
   * Bans specific types from being used.
   *
   * @see [ban-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/ban-types.md)
   */
  '@typescript-eslint/ban-types': BanTypesRuleConfig;
}
