import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoTypeAliasOption {
  allowAliases?: 'always' | 'never' | 'in-unions' | 'in-intersections' | 'in-unions-and-intersections';
  allowCallbacks?: 'always' | 'never';
  allowConditionalTypes?: 'always' | 'never';
  allowConstructors?: 'always' | 'never';
  allowLiterals?: 'always' | 'never' | 'in-unions' | 'in-intersections' | 'in-unions-and-intersections';
  allowMappedTypes?: 'always' | 'never' | 'in-unions' | 'in-intersections' | 'in-unions-and-intersections';
  allowTupleTypes?: 'always' | 'never' | 'in-unions' | 'in-intersections' | 'in-unions-and-intersections';
  allowGenerics?: 'always' | 'never';
}

/**
 * Options.
 */
export type NoTypeAliasOptions = [NoTypeAliasOption?];

/**
 * Disallow the use of type aliases.
 *
 * @see [no-type-alias](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-type-alias.md)
 */
export type NoTypeAliasRuleConfig = RuleConfig<NoTypeAliasOptions>;

/**
 * Disallow the use of type aliases.
 *
 * @see [no-type-alias](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-type-alias.md)
 */
export interface NoTypeAliasRule {
  /**
   * Disallow the use of type aliases.
   *
   * @see [no-type-alias](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-type-alias.md)
   */
  '@typescript-eslint/no-type-alias': NoTypeAliasRuleConfig;
}
