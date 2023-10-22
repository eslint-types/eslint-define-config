import type { ESLint, Linter } from 'eslint';
import type { Rules } from '../rules';
import type { LanguageOptions } from './language-options';
import type { LinterOptions } from './linter-options';

/**
 * Flat ESLint Configuration.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 */
export interface FlatESLintConfig {
  /**
   * An array of glob patterns indicating the files that the configuration object should apply to. If not specified, the configuration object applies to all files.
   *
   * @see [Ignore Patterns](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#excluding-files-with-ignores)
   */
  files?: string[];

  /**
   * An array of glob patterns indicating the files that the configuration object should not apply to. If not specified, the configuration object applies to all files matched by files.
   *
   * @see [Ignore Patterns](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#excluding-files-with-ignores)
   */
  ignores?: string[];

  /**
   * An object containing settings related to how JavaScript is configured for linting.
   *
   * @see [Configuring language options](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-language-options)
   */
  languageOptions?: LanguageOptions;

  /**
   * An object containing settings related to the linting process.
   */
  linterOptions?: LinterOptions;

  /**
   * Either an object containing `preprocess()` and `postprocess()` methods or a string indicating the name of a processor inside of a plugin (i.e., `"pluginName/processorName"`).
   *
   * @see [Using processors](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-processors)
   */
  processor?: string | Linter.Processor;

  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, ESLint.Plugin>;

  /**
   * An object containing the configured rules. When `files` or `ignores` are specified, these rule configurations are only available to the matching files.
   *
   * @see [Configuring rules](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-rules)
   */
  rules?: Partial<Rules>;

  /**
   * An object containing name-value pairs of information that should be available to all rules.
   *
   * @see [Configuring shared settings](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-shared-settings)
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  settings?: Record<string, any>;
}

export * from './language-options';
export * from './linter-options';
