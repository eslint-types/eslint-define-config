import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUndefinedTypesOption {
  definedTypes?: string[];
  disableReporting?: boolean;
  markVariablesAsUsed?: boolean;
}

/**
 * Options.
 */
export type NoUndefinedTypesOptions = [NoUndefinedTypesOption?];

/**
 * Checks that types in jsdoc comments are defined.
 *
 * @see [no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header)
 */
export type NoUndefinedTypesRuleConfig = RuleConfig<NoUndefinedTypesOptions>;

/**
 * Checks that types in jsdoc comments are defined.
 *
 * @see [no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header)
 */
export interface NoUndefinedTypesRule {
  /**
   * Checks that types in jsdoc comments are defined.
   *
   * @see [no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header)
   */
  'jsdoc/no-undefined-types': NoUndefinedTypesRuleConfig;
}
