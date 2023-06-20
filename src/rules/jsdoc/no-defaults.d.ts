import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDefaultsOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  noOptionalParamNames?: boolean;
}

/**
 * Options.
 */
export type NoDefaultsOptions = [NoDefaultsOption?];

/**
 * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
 *
 * @see [no-defaults](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header)
 */
export type NoDefaultsRuleConfig = RuleConfig<NoDefaultsOptions>;

/**
 * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
 *
 * @see [no-defaults](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header)
 */
export interface NoDefaultsRule {
  /**
   * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
   *
   * @see [no-defaults](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header)
   */
  'jsdoc/no-defaults': NoDefaultsRuleConfig;
}
