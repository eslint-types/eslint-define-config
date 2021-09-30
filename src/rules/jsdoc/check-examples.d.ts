import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CheckExamplesOption = {
  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  allowInlineConfig?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  baseConfig?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  captionRequired?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  checkDefaults?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  checkEslintrc?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  checkParams?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  checkProperties?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  configFile?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  exampleCodeRegex?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  matchingFileName?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  matchingFileNameDefaults?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  matchingFileNameParams?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  matchingFileNameProperties?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  noDefaultExampleRules?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  paddedIndent?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  rejectExampleCodeRegex?: any;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  reportUnusedDisableDirectives?: any;
};

/**
 * Options.
 */
export type CheckExamplesOptions = [CheckExamplesOption?];

/**
 * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
 *
 * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
 */
export type CheckExamplesRuleConfig = RuleConfig<CheckExamplesOptions>;

/**
 * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
 *
 * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
 */
export interface CheckExamplesRule {
  /**
   * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
   *
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  'jsdoc/check-examples': CheckExamplesRuleConfig;
}
