import type { LiteralUnion } from './utility-types';

// Some types copied from `@types/eslint` `Linter.ParserOptions`

/**
 * Any valid ECMAScript version number or 'latest':
 *
 * - A version: es3, es5, es6, es7, es8, es9, es10, es11, es12, es13, es14, ...
 * - A year: es2015, es2016, es2017, es2018, es2019, es2020, es2021, es2022, es2023, ...
 * - 'latest'
 *
 * @see https://typescript-eslint.io/architecture/parser/#ecmaversion
 */
export type EcmaVersion =
  | 3
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 2015
  | 2016
  | 2017
  | 2018
  | 2019
  | 2020
  | 2021
  | 2022
  | 2023
  | 'latest';

/**
 * Set to "script" (default) or "module" if your code is in ECMAScript modules.
 */
export type SourceType = 'script' | 'module';

/**
 * An object indicating which additional language features you'd like to use.
 *
 * @see https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-parser-options
 * @see https://typescript-eslint.io/architecture/parser#ecmafeatures
 */
export interface EcmaFeatures extends Partial<Record<string, boolean>> {
  /**
   * Allow `return` statements in the global scope.
   */
  globalReturn?: boolean;

  /**
   * Enable global [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) (if `ecmaVersion` is 5 or greater).
   */
  impliedStrict?: boolean;

  /**
   * Enable [JSX](https://facebook.github.io/jsx).
   */
  jsx?: boolean;
}

/** Lib. */
export type Lib = LiteralUnion<
  | 'es5'
  | 'es6'
  | 'es2015'
  | 'es7'
  | 'es2016'
  | 'es2017'
  | 'es2018'
  | 'es2019'
  | 'es2020'
  | 'esnext'
  | 'dom'
  | 'dom.iterable'
  | 'webworker'
  | 'webworker.importscripts'
  | 'webworker.iterable'
  | 'scripthost'
  | 'es2015.core'
  | 'es2015.collection'
  | 'es2015.generator'
  | 'es2015.iterable'
  | 'es2015.promise'
  | 'es2015.proxy'
  | 'es2015.reflect'
  | 'es2015.symbol'
  | 'es2015.symbol.wellknown'
  | 'es2016.array.include'
  | 'es2017.object'
  | 'es2017.sharedmemory'
  | 'es2017.string'
  | 'es2017.intl'
  | 'es2017.typedarrays'
  | 'es2018.asyncgenerator'
  | 'es2018.asynciterable'
  | 'es2018.intl'
  | 'es2018.promise'
  | 'es2018.regexp'
  | 'es2019.array'
  | 'es2019.object'
  | 'es2019.string'
  | 'es2019.symbol'
  | 'es2020.bigint'
  | 'es2020.promise'
  | 'es2020.sharedmemory'
  | 'es2020.string'
  | 'es2020.symbol.wellknown'
  | 'es2020.intl'
  | 'esnext.array'
  | 'esnext.symbol'
  | 'esnext.asynciterable'
  | 'esnext.intl'
  | 'esnext.bigint'
  | 'esnext.string'
  | 'esnext.promise'
  | 'esnext.weakref'
  | 'es2016.full'
  | 'es2017.full'
  | 'es2018.full'
  | 'es2019.full'
  | 'es2020.full'
  | 'esnext.full'
  | 'lib'
>;

/**
 * This is a special exported interface for other packages to declare
 * additional parsers that should bail out for eslint parsers. For example
 * `'@typescript-eslint/eslint-plugin'` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'eslint-define-config' {
 *   export interface CustomParsers {
 *     '@typescript-eslint/parser': void;
 *   }
 * }
 * ```
 */
export interface CustomParsers {}

/** Parser. */
export type Parser = LiteralUnion<keyof CustomParsers>;

/**
 * This is a special exported interface for other packages to declare
 * additional parser options that should bail out for eslint parser options. For example
 * `@typescript-eslint/eslint-plugin` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'eslint-define-config' {
 *   export interface CustomParserOptions {
 *     /**
 *      * This option allows you to provide the root directory for relative tsconfig paths specified in the `project` option above.
 *      *
 *      * \@see [tsconfigRootDir](https://typescript-eslint.io/architecture/parser/#tsconfigrootdir)
 *      *\/
 *     tsconfigRootDir?: string;
 *
 *     useJSXTextNode?: boolean;
 *
 *     /**
 *      * This option allows you to toggle the warning that the parser will give you if you use a version of TypeScript which is not explicitly supported.
 *      *
 *      * \@default true
 *      *
 *      * \@see [warnOnUnsupportedTypeScriptVersion](https://typescript-eslint.io/architecture/parser/#warnonunsupportedtypescriptversion)
 *      *\/
 *     warnOnUnsupportedTypeScriptVersion?: boolean;
 *
 *     /**
 *      * This option allow you to tell parser to act as if `emitDecoratorMetadata: true` is set in `tsconfig.json`, but without [type-aware linting](https://typescript-eslint.io/linting/typed-linting).
 *      * In other words, you don't have to specify `parserOptions.project` in this case, making the linting process faster.
 *      *
 *      * \@default undefined
 *      *
 *      * \@see [emitDecoratorMetadata](https://typescript-eslint.io/architecture/parser/#emitdecoratormetadata)
 *      *\/
 *     emitDecoratorMetadata?: boolean;
 *   }
 * }
 * ```
 */
export interface CustomParserOptions {}

/**
 * Parser options.
 *
 * @see [Specifying Parser Options](https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options)
 */
export interface ParserOptions
  extends Partial<CustomParserOptions>,
    Partial<Record<string, unknown>> {
  /**
   * Accepts any valid ECMAScript version number or `'latest'`:
   *
   * - A version: es3, es5, es6, es7, es8, es9, es10, es11, es12, es13, es14, ..., or
   * - A year: es2015, es2016, es2017, es2018, es2019, es2020, es2021, es2022, es2023, ..., or
   * - `'latest'`
   *
   * When it's a version or a year, the value must be a number - so do not include the `es` prefix.
   *
   * Specifies the version of ECMAScript syntax you want to use. This is used by the parser to determine how to perform scope analysis, and it affects the default
   *
   * @default 2018
   *
   * @see https://typescript-eslint.io/architecture/parser/#ecmaversion
   */
  ecmaVersion?: EcmaVersion;

  /**
   * Set to "script" (default) or "module" if your code is in ECMAScript modules.
   *
   * @default 'script'
   *
   * @see https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-parser-options
   */
  sourceType?: SourceType;

  /**
   * An object indicating which additional language features you'd like to use.
   *
   * @see https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-parser-options
   * @see https://typescript-eslint.io/architecture/parser#ecmafeatures
   */
  ecmaFeatures?: EcmaFeatures;

  /**
   * Parser.
   *
   * @see [Working with Custom Parsers](https://eslint.org/docs/developer-guide/working-with-custom-parsers)
   * @see [Specifying Parser](https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser)
   */
  parser?: Parser;
}
