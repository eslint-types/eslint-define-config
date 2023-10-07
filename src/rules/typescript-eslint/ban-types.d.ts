import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type BanConfig =
  | null
  | false
  | true
  | string
  | {
      /**
       * Custom error message
       */
      message?: string;
      /**
       * Type to autofix replace with. Note that autofixers can be applied automatically - so you need to be careful with this option.
       */
      fixWith?: string;
      /**
       * Types to suggest replacing with.
       */
      suggest?: string[];
    };

export interface BanTypesOption {
  types?: {
    [k: string]: BanConfig;
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
