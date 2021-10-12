import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface BanTypesOption {
  /**
   * An object whose keys are the types you want to ban, and the values are error messages.
   *
   * @see [types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md)
   */
  types?: {
    [k: string]:
      | null
      | boolean
      | string
      | {
          /**
           * The message to display when the type is matched.
           *
           * @see [types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md)
           */
          message?: string;
          /**
           * A string to replace the banned type with when the fixer is run. If this is omitted, no fix will be done.
           *
           * @see [types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md)
           */
          fixWith?: string;
        };
  };
  /**
   * If you're specifying custom `types`, you can set this to `true` to extend the default types configuration.
   *
   * @see [extendDefaults](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md)
   */
  extendDefaults?: boolean;
}

/**
 * Options.
 */
export type BanTypesOptions = [BanTypesOption?];

/**
 * Bans specific types from being used.
 *
 * @see [ban-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.0.0/packages/eslint-plugin/docs/rules/ban-types.md)
 */
export type BanTypesRuleConfig = RuleConfig<BanTypesOptions>;

/**
 * Bans specific types from being used.
 *
 * @see [ban-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.0.0/packages/eslint-plugin/docs/rules/ban-types.md)
 */
export interface BanTypesRule {
  /**
   * Bans specific types from being used.
   *
   * @see [ban-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.0.0/packages/eslint-plugin/docs/rules/ban-types.md)
   */
  '@typescript-eslint/ban-types': BanTypesRuleConfig;
}
