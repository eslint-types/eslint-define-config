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
 * @see [no-this-alias](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-this-alias.md)
 */
export type NoThisAliasRuleConfig = RuleConfig<NoThisAliasOptions>;

/**
 * Disallow aliasing `this`.
 *
 * @see [no-this-alias](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-this-alias.md)
 */
export interface NoThisAliasRule {
  /**
   * Disallow aliasing `this`.
   *
   * @see [no-this-alias](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-this-alias.md)
   */
  '@typescript-eslint/no-this-alias': NoThisAliasRuleConfig;
}
