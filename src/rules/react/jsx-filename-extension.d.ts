import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxFilenameExtensionOption {
  allow?: 'always' | 'as-needed';
  extensions?: string[];
}

/**
 * Options.
 */
export type JsxFilenameExtensionOptions = [JsxFilenameExtensionOption?];

/**
 * Disallow file extensions that may contain JSX.
 *
 * @see [jsx-filename-extension](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md)
 */
export type JsxFilenameExtensionRuleConfig =
  RuleConfig<JsxFilenameExtensionOptions>;

/**
 * Disallow file extensions that may contain JSX.
 *
 * @see [jsx-filename-extension](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md)
 */
export interface JsxFilenameExtensionRule {
  /**
   * Disallow file extensions that may contain JSX.
   *
   * @see [jsx-filename-extension](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md)
   */
  'react/jsx-filename-extension': JsxFilenameExtensionRuleConfig;
}
