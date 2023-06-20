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
 * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header)
 */
export type NoTypesRuleConfig = RuleConfig<NoTypesOptions>;

/**
 * This rule reports types being used on `@param` or `@returns`.
 *
 * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header)
 */
export interface NoTypesRule {
  /**
   * This rule reports types being used on `@param` or `@returns`.
   *
   * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header)
   */
  'jsdoc/no-types': NoTypesRuleConfig;
}
