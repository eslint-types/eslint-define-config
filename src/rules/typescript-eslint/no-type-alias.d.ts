import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoTypeAliasOption {
  /**
   * Whether to allow direct one-to-one type aliases.
   */
  allowAliases?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases for callbacks.
   */
  allowCallbacks?: 'always' | 'never';
  /**
   * Whether to allow type aliases for conditional types.
   */
  allowConditionalTypes?: 'always' | 'never';
  /**
   * Whether to allow type aliases with constructors.
   */
  allowConstructors?: 'always' | 'never';
  /**
   * Whether to allow type aliases with object literal types.
   */
  allowLiterals?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases with mapped types.
   */
  allowMappedTypes?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases with tuple types.
   */
  allowTupleTypes?:
    | 'always'
    | 'never'
    | 'in-unions'
    | 'in-intersections'
    | 'in-unions-and-intersections';
  /**
   * Whether to allow type aliases with generic types.
   */
  allowGenerics?: 'always' | 'never';
}

/**
 * Options.
 */
export type NoTypeAliasOptions = [NoTypeAliasOption?];

/**
 * Disallow type aliases.
 *
 * @deprecated
 *
 * @see [no-type-alias](https://typescript-eslint.io/rules/no-type-alias)
 */
export type NoTypeAliasRuleConfig = RuleConfig<NoTypeAliasOptions>;

/**
 * Disallow type aliases.
 *
 * @deprecated
 *
 * @see [no-type-alias](https://typescript-eslint.io/rules/no-type-alias)
 */
export interface NoTypeAliasRule {
  /**
   * Disallow type aliases.
   *
   * @deprecated
   *
   * @see [no-type-alias](https://typescript-eslint.io/rules/no-type-alias)
   */
  '@typescript-eslint/no-type-alias': NoTypeAliasRuleConfig;
}
