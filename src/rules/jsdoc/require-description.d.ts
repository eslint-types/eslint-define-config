import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireDescriptionOption = {
  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  checkConstructors?: any;

  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  checkGetters?: any;

  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  checkSetters?: any;

  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  contexts?: any;

  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  descriptionStyle?: any;

  /**
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  exemptedBy?: any;
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
