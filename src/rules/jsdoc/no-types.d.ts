import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoTypesOption = {
  /**
   * @see [contexts](https://github.com/gajus/eslint-plugin-jsdoc#contexts-3)
   */
  contexts?: string[];
};

/**
 * Options.
 */
export type NoTypesOptions = [NoTypesOption?];

/**
 * This rule reports types being used on `@param` or `@returns`.
 *
 * The rule is intended to prevent the indication of types on tags where the type information would be redundant with TypeScript.
 *
 * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc#no-types)
 */
export type NoTypesRuleConfig = RuleConfig<NoTypesOptions>;

/**
 * This rule reports types being used on `@param` or `@returns`.
 *
 * The rule is intended to prevent the indication of types on tags where the type information would be redundant with TypeScript.
 *
 * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc#no-types)
 */
export interface NoTypesRule {
  /**
   * This rule reports types being used on `@param` or `@returns`.
   *
   * The rule is intended to prevent the indication of types on tags where the type information would be redundant with TypeScript.
   *
   * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc#no-types)
   */
  'jsdoc/no-types': NoTypesRuleConfig;
}
