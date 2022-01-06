import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoThisAliasOption {
  allowDestructuring?: boolean;
  allowedNames?: string[];
}

/**
 * Options.
 */
export type NoThisAliasOptions = [NoThisAliasOption?];

/**
 * Disallow aliasing `this`.
 *
 * @see [no-this-alias](https://typescript-eslint.io/rules/no-this-alias)
 */
export type NoThisAliasRuleConfig = RuleConfig<NoThisAliasOptions>;

/**
 * Disallow aliasing `this`.
 *
 * @see [no-this-alias](https://typescript-eslint.io/rules/no-this-alias)
 */
export interface NoThisAliasRule {
  /**
   * Disallow aliasing `this`.
   *
   * @see [no-this-alias](https://typescript-eslint.io/rules/no-this-alias)
   */
  '@typescript-eslint/no-this-alias': NoThisAliasRuleConfig;
}
