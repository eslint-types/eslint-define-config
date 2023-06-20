import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireReturnsDescriptionOption {
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
export type RequireReturnsDescriptionOptions = [
  RequireReturnsDescriptionOption?,
];

/**
 * Requires that the `@returns` tag has a `description` value.
 *
 * @see [require-returns-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header)
 */
export type RequireReturnsDescriptionRuleConfig =
  RuleConfig<RequireReturnsDescriptionOptions>;

/**
 * Requires that the `@returns` tag has a `description` value.
 *
 * @see [require-returns-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header)
 */
export interface RequireReturnsDescriptionRule {
  /**
   * Requires that the `@returns` tag has a `description` value.
   *
   * @see [require-returns-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header)
   */
  'jsdoc/require-returns-description': RequireReturnsDescriptionRuleConfig;
}
