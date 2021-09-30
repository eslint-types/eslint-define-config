import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireDescriptionOption = {
  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  checkConstructors?: boolean;

  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  checkGetters?: boolean;

  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  checkSetters?: boolean;

  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  contexts?: any[];

  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  descriptionStyle?: string;

  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  exemptedBy?: any[];
};

/**
 * Options.
 */
export type RequireDescriptionOptions = [RequireDescriptionOption?];

/**
 * Requires that all functions have a description.
 *
 * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
 */
export type RequireDescriptionRuleConfig = RuleConfig<RequireDescriptionOptions>;

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
