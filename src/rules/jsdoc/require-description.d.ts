import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireDescriptionOption {
  checkConstructors?: boolean;
  checkGetters?: boolean;
  checkSetters?: boolean;
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  descriptionStyle?: 'body' | 'tag' | 'any';
  exemptedBy?: string[];
}

/**
 * Options.
 */
export type RequireDescriptionOptions = [RequireDescriptionOption?];

/**
 * Requires that all functions have a description.
 *
 * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#repos-sticky-header)
 */
export type RequireDescriptionRuleConfig =
  RuleConfig<RequireDescriptionOptions>;

/**
 * Requires that all functions have a description.
 *
 * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#repos-sticky-header)
 */
export interface RequireDescriptionRule {
  /**
   * Requires that all functions have a description.
   *
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#repos-sticky-header)
   */
  'jsdoc/require-description': RequireDescriptionRuleConfig;
}
