import type {
  EcmaVersion,
  Parser,
  ParserOptions,
  SourceType,
} from '../parser-options';

export type ParserModule =
  | {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parse(text: string, options?: any): any;
    }
  | {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parseForESLint(text: string, options?: any): any;
    };

/**
 * An object containing settings related to how JavaScript is configured for linting
 */
export interface LanguageOptions {
  /**
   * The version of ECMAScript to support. May be any year (i.e., `2022`) or version (i.e., `5`). Set to `"latest"` for the most recent supported version.
   *
   * @default "latest"
   * @see [Configuring the JavaScript version](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-the-javascript-version)
   */
  ecmaVersion?: EcmaVersion;

  /**
   * The type of JavaScript source code. Possible values are `"script"` for traditional script files, `"module"` for ECMAScript modules (ESM), and `"commonjs"` for CommonJS files.
   *
   * (default: `"module"` for .js and .mjs files; `"commonjs"` for .cjs files)
   *
   * @see [Configuring the JavaScript source type](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-the-javascript-source-type)
   */
  sourceType?: SourceType | 'commonjs';

  /**
   * An object specifying additional objects that should be added to the global scope during linting.
   *
   * @see [Configuring global variables](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-global-variables)
   */
  globals?: Record<
    string,
    'readonly' | 'writable' | false | 'readable' | true | 'writeable' | 'off'
  >;

  /**
   * Either an object containing a `parse()` method or a string indicating the name of a parser inside of a plugin (i.e., `"pluginName/parserName"`).
   *
   * @default "@/espree"
   *
   * @see [Configuring a custom parser and its options](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-a-custom-parser-and-its-options)
   */
  parser?: Parser | ParserModule;

  /**
   * An object specifying additional options that are passed directly to the `parser()` method on the parser. The available options are parser-dependent.
   *
   * @see [Configuring a custom parser and its options](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-a-custom-parser-and-its-options)
   */
  parserOptions?: ParserOptions;
}
