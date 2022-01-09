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
 * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
 */
export type RequireDescriptionRuleConfig =
  RuleConfig<RequireDescriptionOptions>;

/**
 * Requires that all functions have a description.
 *
 * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
 */
export interface RequireDescriptionRule {
  /**
   * Requires that all functions have a description.
   *
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  'jsdoc/require-description': RequireDescriptionRuleConfig;
}
