import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface FileExtensionInImportConfig {
  tryExtensions?: string[];
  [ext: `.${string}`]: 'always' | 'never';
}

/**
 * Option.
 */
export type FileExtensionInImportOption = 'always' | 'never';

/**
 * Options.
 */
export type FileExtensionInImportOptions = [
  FileExtensionInImportOption?,
  FileExtensionInImportConfig?,
];

/**
 * Enforce the style of file extensions in `import` declarations.
 *
 * @see [file-extension-in-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/file-extension-in-import.md)
 */
export type FileExtensionInImportRuleConfig =
  RuleConfig<FileExtensionInImportOptions>;

/**
 * Enforce the style of file extensions in `import` declarations.
 *
 * @see [file-extension-in-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/file-extension-in-import.md)
 */
export interface FileExtensionInImportRule {
  /**
   * Enforce the style of file extensions in `import` declarations.
   *
   * @see [file-extension-in-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/file-extension-in-import.md)
   */
  'node/file-extension-in-import': FileExtensionInImportRuleConfig;
}
