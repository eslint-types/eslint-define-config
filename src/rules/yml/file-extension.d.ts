import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface FileExtensionOption {
  extension?: 'yaml' | 'yml';
  caseSensitive?: boolean;
}

/**
 * Options.
 */
export type FileExtensionOptions = [FileExtensionOption?];

/**
 * Enforce YAML file extension.
 *
 * @see [file-extension](https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html)
 */
export type FileExtensionRuleConfig = RuleConfig<FileExtensionOptions>;

/**
 * Enforce YAML file extension.
 *
 * @see [file-extension](https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html)
 */
export interface FileExtensionRule {
  /**
   * Enforce YAML file extension.
   *
   * @see [file-extension](https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html)
   */
  'yml/file-extension': FileExtensionRuleConfig;
}
