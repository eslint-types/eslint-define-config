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
 * Disallow certain types.
 *
 * @see [ban-types](https://typescript-eslint.io/rules/ban-types)
 */
export type BanTypesRuleConfig = RuleConfig<BanTypesOptions>;

/**
 * Disallow certain types.
 *
 * @see [ban-types](https://typescript-eslint.io/rules/ban-types)
 */
export interface BanTypesRule {
  /**
   * Disallow certain types.
   *
   * @see [ban-types](https://typescript-eslint.io/rules/ban-types)
   */
  '@typescript-eslint/ban-types': BanTypesRuleConfig;
}
