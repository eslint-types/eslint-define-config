import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CheckExamplesOption = {
  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  allowInlineConfig?: boolean;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  baseConfig?: Record<string, any>;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  captionRequired?: boolean;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  checkDefaults?: boolean;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  checkEslintrc?: boolean;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  checkParams?: boolean;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  checkProperties?: boolean;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  configFile?: string;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  exampleCodeRegex?: string;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  matchingFileName?: string;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  matchingFileNameDefaults?: string;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  matchingFileNameParams?: string;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  matchingFileNameProperties?: string;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  noDefaultExampleRules?: boolean;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  paddedIndent?: number;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  rejectExampleCodeRegex?: string;

  /**
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  reportUnusedDisableDirectives?: boolean;
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
