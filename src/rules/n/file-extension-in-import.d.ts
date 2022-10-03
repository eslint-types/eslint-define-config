import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface FileExtensionInImportConfig {
  [k: string]: 'always' | 'never';
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
 * @see [file-extension-in-import](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/file-extension-in-import.md)
 */
export type FileExtensionInImportRuleConfig =
  RuleConfig<FileExtensionInImportOptions>;

/**
 * Enforce the style of file extensions in `import` declarations.
 *
 * @see [file-extension-in-import](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/file-extension-in-import.md)
 */
export interface FileExtensionInImportRule {
  /**
   * Enforce the style of file extensions in `import` declarations.
   *
   * @see [file-extension-in-import](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/file-extension-in-import.md)
   */
  'n/file-extension-in-import': FileExtensionInImportRuleConfig;
}
