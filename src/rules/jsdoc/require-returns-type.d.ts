import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireReturnsTypeOption {
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
export type RequireReturnsTypeOptions = [RequireReturnsTypeOption?];

/**
 * Requires that `@returns` tag has `type` value.
 *
 * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md#repos-sticky-header)
 */
export type RequireReturnsTypeRuleConfig =
  RuleConfig<RequireReturnsTypeOptions>;

/**
 * Requires that `@returns` tag has `type` value.
 *
 * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md#repos-sticky-header)
 */
export interface RequireReturnsTypeRule {
  /**
   * Requires that `@returns` tag has `type` value.
   *
   * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md#repos-sticky-header)
   */
  'jsdoc/require-returns-type': RequireReturnsTypeRuleConfig;
}
