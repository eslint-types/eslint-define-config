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
 * @see [ban-types](https://typescript-eslint.io/rules/ban-types)
 */
export type BanTypesRuleConfig = RuleConfig<BanTypesOptions>;

/**
 * Bans specific types from being used.
 *
 * @see [ban-types](https://typescript-eslint.io/rules/ban-types)
 */
export interface BanTypesRule {
  /**
   * Bans specific types from being used.
   *
   * @see [ban-types](https://typescript-eslint.io/rules/ban-types)
   */
  '@typescript-eslint/ban-types': BanTypesRuleConfig;
}
