import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CheckExamplesOption {
  allowInlineConfig?: boolean;
  baseConfig?: {
    [k: string]: any;
  };
  captionRequired?: boolean;
  checkDefaults?: boolean;
  checkEslintrc?: boolean;
  checkParams?: boolean;
  checkProperties?: boolean;
  configFile?: string;
  exampleCodeRegex?: string;
  matchingFileName?: string;
  matchingFileNameDefaults?: string;
  matchingFileNameParams?: string;
  matchingFileNameProperties?: string;
  noDefaultExampleRules?: boolean;
  paddedIndent?: number;
  rejectExampleCodeRegex?: string;
  reportUnusedDisableDirectives?: boolean;
}

/**
 * Options.
 */
export type CheckExamplesOptions = [CheckExamplesOption?];

/**
 * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
 *
 * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md#repos-sticky-header)
 */
export type CheckExamplesRuleConfig = RuleConfig<CheckExamplesOptions>;

/**
 * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
 *
 * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md#repos-sticky-header)
 */
export interface CheckExamplesRule {
  /**
   * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
   *
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md#repos-sticky-header)
   */
  'jsdoc/check-examples': CheckExamplesRuleConfig;
}
