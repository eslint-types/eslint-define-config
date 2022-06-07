import type { Environments } from './env';
import type { Extends } from './extends';
import type { Overrides } from './overrides';
import type { Parser, ParserOptions } from './parser-options';
import type { Plugin } from './plugin';
import type { Rules } from './rules';
import type { Settings } from './settings';

/**
 * ESLint Configuration.
 *
 * @see [ESLint Configuration](https://eslint.org/docs/user-guide/configuring/)
 */
export interface EslintConfig {
  /**
   * @see [Using Configuration Files](https://eslint.org/docs/user-guide/configuring/configuration-files#using-configuration-files)
   */
  root?: boolean;
  /**
   * Tell ESLint to ignore specific files and directories.
   *
   * @see [Ignore Patterns](https://eslint.org/docs/user-guide/configuring/ignoring-code)
   */
  ignorePatterns?: string[];
  /**
   * An environment provides predefined global variables.
   *
   * @see [Environments](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments)
   */
  env?: Environments;
  /**
   * Extending Configuration Files.
   *
   * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
   */
  extends?: Extends;
  /**
   * Specifying Globals.
   *
   * @see [Globals](https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals)
   */
  globals?: Record<
    string,
    'readonly' | 'writable' | false | 'readable' | true | 'writeable' | 'off'
  >;
  /**
   * Parser.
   *
   * @see [Working with Custom Parsers](https://eslint.org/docs/developer-guide/working-with-custom-parsers)
   * @see [Specifying Parser](https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser)
   */
  parser?: Parser;
  /**
   * Parser Options.
   *
   * @see [Working with Custom Parsers](https://eslint.org/docs/developer-guide/working-with-custom-parsers)
   * @see [Specifying Parser Options](https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options)
   */
  parserOptions?: ParserOptions;
  /**
   * Which third-party plugins define additional rules, environments, configs, etc. for ESLint to use.
   *
   * @see [Configuring Plugins](https://eslint.org/docs/user-guide/configuring/plugins#configuring-plugins)
   */
  plugins?: Plugin[];
  /**
   * Specifying Processor.
   *
   * @see [processor](https://eslint.org/docs/user-guide/configuring/plugins#specifying-processor)
   */
  processor?: string;
  /**
   * Rules.
   *
   * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
   */
  rules?: Rules;
  /**
   * Overrides.
   *
   * @see [How do overrides work](https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work)
   */
  overrides?: Overrides;
  /**
   * Settings.
   *
   * @see [Settings](https://eslint.org/docs/user-guide/configuring/configuration-files#adding-shared-settings)
   */
  settings?: Settings;
  /**
   * Disabling Inline Comments.
   *
   * @see [Disabling Inline Comments](https://eslint.org/docs/user-guide/configuring/rules#disabling-inline-comments)
   */
  noInlineConfig?: boolean;
  /**
   * Report unused `eslint-disable` comments.
   *
   * @see [Report unused `eslint-disable` comments](https://eslint.org/docs/user-guide/configuring/rules#report-unused-eslint-disable-comments)
   */
  reportUnusedDisableDirectives?: boolean;
}

/**
 * Define an eslint config.
 *
 * @param config Eslint config.
 * @returns Eslint config.
 */
export function defineConfig(config: EslintConfig): EslintConfig;
