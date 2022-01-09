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
 * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type)
 */
export type RequireReturnsTypeRuleConfig =
  RuleConfig<RequireReturnsTypeOptions>;

/**
 * Requires that `@returns` tag has `type` value.
 *
 * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type)
 */
export interface RequireReturnsTypeRule {
  /**
   * Requires that `@returns` tag has `type` value.
   *
   * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type)
   */
  'jsdoc/require-returns-type': RequireReturnsTypeRuleConfig;
}
