import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUndefinedTypesOption = {
  /**
   * @see [no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types)
   */
  definedTypes?: any;
};

/**
 * Options.
 */
export type NoUndefinedTypesOptions = [NoUndefinedTypesOption?];

/**
 * Checks that types in jsdoc comments are defined.
 *
 * @see [no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types)
 */
export type NoUndefinedTypesRuleConfig = RuleConfig<NoUndefinedTypesOptions>;

/**
 * Checks that types in jsdoc comments are defined.
 *
 * @see [no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types)
 */
export interface NoUndefinedTypesRule {
  /**
   * Checks that types in jsdoc comments are defined.
   *
   * @see [no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types)
   */
  'jsdoc/no-undefined-types': NoUndefinedTypesRuleConfig;
}
