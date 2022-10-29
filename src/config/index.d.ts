import type { Parser, ParserOptions } from '../parser-options';
import type { Rules } from '../rules';
import type { Environments } from './env';
import type { Extends } from './extends';
import type { Overrides } from './overrides';
import type { Plugin } from './plugin';
import type { Settings } from './settings';

/**
 * ESLint Configuration.
 *
 * @see [ESLint Configuration](https://ESLint.org/docs/user-guide/configuring/)
 */
export interface ESLintConfig {
  /**
   * @see [Using Configuration Files](https://ESLint.org/docs/user-guide/configuring/configuration-files#using-configuration-files)
   */
  root?: boolean;

  /**
   * Tell ESLint to ignore specific files and directories.
   *
   * @see [Ignore Patterns](https://ESLint.org/docs/user-guide/configuring/ignoring-code)
   */
  ignorePatterns?: string[];

  /**
   * An environment provides predefined global variables.
   *
   * @see [Environments](https://ESLint.org/docs/user-guide/configuring/language-options#specifying-environments)
   */
  env?: Environments;

  /**
   * Extending Configuration Files.
   *
   * @see [Extends](https://ESLint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
   */
  extends?: Extends;

  /**
   * Specifying Globals.
   *
   * @see [Globals](https://ESLint.org/docs/user-guide/configuring/language-options#specifying-globals)
   */
  globals?: Record<
    string,
    'readonly' | 'writable' | false | 'readable' | true | 'writeable' | 'off'
  >;

  /**
   * Parser.
   *
   * @see [Working with Custom Parsers](https://ESLint.org/docs/developer-guide/working-with-custom-parsers)
   * @see [Specifying Parser](https://ESLint.org/docs/user-guide/configuring/plugins#specifying-parser)
   */
  parser?: Parser;

  /**
   * Parser Options.
   *
   * @see [Working with Custom Parsers](https://ESLint.org/docs/developer-guide/working-with-custom-parsers)
   * @see [Specifying Parser Options](https://ESLint.org/docs/user-guide/configuring/language-options#specifying-parser-options)
   */
  parserOptions?: ParserOptions;

  /**
   * Which third-party plugins define additional rules, environments, configs, etc. for ESLint to use.
   *
   * @see [Configuring Plugins](https://ESLint.org/docs/user-guide/configuring/plugins#configuring-plugins)
   */
  plugins?: Plugin[];

  /**
   * Specifying Processor.
   *
   * @see [processor](https://ESLint.org/docs/user-guide/configuring/plugins#specifying-processor)
   */
  processor?: string;

  /**
   * Rules.
   *
   * @see [Rules](https://ESLint.org/docs/user-guide/configuring/rules)
   */
  rules?: Rules;

  /**
   * Overrides.
   *
   * @see [How do overrides work](https://ESLint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work)
   */
  overrides?: Overrides;

  /**
   * Settings.
   *
   * @see [Settings](https://ESLint.org/docs/user-guide/configuring/configuration-files#adding-shared-settings)
   */
  settings?: Settings;

  /**
   * Disabling Inline Comments.
   *
   * @see [Disabling Inline Comments](https://ESLint.org/docs/user-guide/configuring/rules#disabling-inline-comments)
   */
  noInlineConfig?: boolean;

  /**
   * Report unused `ESLint-disable` comments.
   *
   * @see [Report unused `ESLint-disable` comments](https://ESLint.org/docs/user-guide/configuring/rules#report-unused-ESLint-disable-comments)
   */
  reportUnusedDisableDirectives?: boolean;
}

export * from './env';
export * from './extends';
export * from './overrides';
export * from './plugin';
export * from './settings';
