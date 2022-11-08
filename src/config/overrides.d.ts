import type { Parser, ParserOptions } from '../parser-options';
import type { Rules } from '../rules';
import type { Environments } from './env';
import type { Extends } from './extends';
import type { Plugin } from './plugin';
import type { Settings } from './settings';

/**
 *
 */
export interface Override {
  files: string[] | string;

  excludedFiles?: string;

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
   * @see [Globals](https://ESLint.org/docs/user-guide/configuring/language-options#specifying-globals)
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
   * Settings.
   *
   * @see [Settings](https://eslint.org/docs/user-guide/configuring/configuration-files#adding-shared-settings)
   */
  settings?: Settings;
}

/**
 * Overrides.
 */
export type Overrides = Array<Override>;
