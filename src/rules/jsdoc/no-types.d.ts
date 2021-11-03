import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoTypesOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
}

/**
 * Options.
 */
export type NoTypesOptions = [NoTypesOption?];

/**
 * This rule reports types being used on `@param` or `@returns`.
 *
 * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types)
 */
export type NoTypesRuleConfig = RuleConfig<NoTypesOptions>;

/**
 * This rule reports types being used on `@param` or `@returns`.
 *
 * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types)
 */
export interface NoTypesRule {
  /**
   * This rule reports types being used on `@param` or `@returns`.
   *
   * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types)
   */
  'jsdoc/no-types': NoTypesRuleConfig;
}
