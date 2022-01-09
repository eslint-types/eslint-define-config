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
 * @see [require-returns-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description)
 */
export type RequireReturnsDescriptionRuleConfig =
  RuleConfig<RequireReturnsDescriptionOptions>;

/**
 * Requires that the `@returns` tag has a `description` value.
 *
 * @see [require-returns-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description)
 */
export interface RequireReturnsDescriptionRule {
  /**
   * Requires that the `@returns` tag has a `description` value.
   *
   * @see [require-returns-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description)
   */
  'jsdoc/require-returns-description': RequireReturnsDescriptionRuleConfig;
}
