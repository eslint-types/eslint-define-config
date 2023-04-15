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

/** DebugLevel. */
export type DebugLevel =
  | boolean
  | Array<'eslint' | 'typescript' | 'typescript-eslint'>;

/** Parser. */
export type Parser = LiteralUnion<
  | 'babel-eslint'
  | '@typescript-eslint/parser'
  | 'jsonc-eslint-parser'
  | 'vue-eslint-parser'
>;

/**
 * Parser options.
 *
 * @see [Specifying Parser Options](https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options)
 */
export interface ParserOptions extends Partial<Record<string, unknown>> {
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
   * The identifier that's used for JSX Elements creation (after transpilation).
   * If you're using a library other than React (like `preact`), then you should change this value.
   * If you are using the [new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) you can set this to `null`.
   *
   * This should not be a member expression - just the root identifier (i.e. use `"React"` instead of `"React.createElement"`).
   *
   * If you provide `parserOptions.project`, you do not need to set this, as it will automatically detected from the compiler.
   *
   * @default 'React'
   *
   * @see [jsxPragma](https://typescript-eslint.io/architecture/parser#jsxpragma)
   */
  jsxPragma?: string;

  /**
   * The identifier that's used for JSX fragment elements (after transpilation).
   * If `null`, assumes transpilation will always use a member of the configured `jsxPragma`.
   * This should not be a member expression - just the root identifier (i.e. use `"h"` instead of `"h.Fragment"`).
   *
   * If you provide `parserOptions.project`, you do not need to set this, as it will automatically detected from the compiler.
   *
   * @default null
   *
   * @see [jsxFragmentName](https://typescript-eslint.io/architecture/parser#jsxfragmentname)
   */
  jsxFragmentName?: string | null;

  /**
   * For valid options, see the [TypeScript compiler options](https://www.typescriptlang.org/tsconfig#lib).
   *
   * Specifies the TypeScript `libs` that are available.
   * This is used by the scope analyser to ensure there are global variables declared for the types exposed by TypeScript.
   *
   * If you provide `parserOptions.project`, you do not need to set this, as it will automatically detected from the compiler.
   *
   * @default ['es2018']
   *
   * @see [lib](https://typescript-eslint.io/architecture/parser/#lib)
   */
  lib?: Lib[];

  comment?: boolean;

  debugLevel?: DebugLevel;

  errorOnTypeScriptSyntacticAndSemanticIssues?: boolean;

  errorOnUnknownASTType?: boolean;

  /**
   * This option allows you to provide one or more additional file extensions which should be considered in the TypeScript Program compilation.
   *
   * The default extensions are `.ts`, `.tsx`, `.js`, and `.jsx`. Add extensions starting with `.`, followed by the file extension.
   * E.g. for a `.vue` file use `"extraFileExtensions: [".vue"]`.
   *
   * @see [extraFileExtensions](https://typescript-eslint.io/architecture/parser/#extrafileextensions)
   */
  extraFileExtensions?: string[];

  filePath?: string;

  loc?: boolean;

  /**
   * Parser.
   *
   * @see [Working with Custom Parsers](https://eslint.org/docs/developer-guide/working-with-custom-parsers)
   * @see [Specifying Parser](https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser)
   */
  parser?: Parser;

  /**
   * This option allows you to provide a path to your project's `tsconfig.json`.
   * **This setting is required if you want to use rules which require type information.**
   * Relative paths are interpreted relative to the current working directory if `tsconfigRootDir` is not set.
   * If you intend on running ESLint from directories other than the project root, you should consider using `tsconfigRootDir`.
   *
   * @default undefined
   *
   * @see [project](https://typescript-eslint.io/architecture/parser/#project)
   */
  project?: string | string[] | true | null;

  /**
   * This option allows you to ignore folders from being included in your provided list of `project`s.
   * This is useful if you have configured glob patterns, but want to make sure you ignore certain folders.
   *
   * It accepts an array of globs to exclude from the `project` globs.
   *
   * For example, by default it will ensure that a glob like `./**‎/tsconfig.json` will not match any `tsconfigs` within your `node_modules` folder (some npm packages do not exclude their source files from their published packages).
   *
   * @default ['**‎/node_modules/**']
   *
   * @see [projectFolderIgnoreList](https://typescript-eslint.io/architecture/parser/#projectfolderignorelist)
   */
  projectFolderIgnoreList?: Array<string | RegExp>;

  range?: boolean;

  tokens?: boolean;

  /**
   * This option allows you to provide the root directory for relative tsconfig paths specified in the `project` option above.
   *
   * @see [tsconfigRootDir](https://typescript-eslint.io/architecture/parser/#tsconfigrootdir)
   */
  tsconfigRootDir?: string;

  useJSXTextNode?: boolean;

  /**
   * This option allows you to toggle the warning that the parser will give you if you use a version of TypeScript which is not explicitly supported.
   *
   * @default true
   *
   * @see [warnOnUnsupportedTypeScriptVersion](https://typescript-eslint.io/architecture/parser/#warnonunsupportedtypescriptversion)
   */
  warnOnUnsupportedTypeScriptVersion?: boolean;

  /**
   * This option allow you to tell parser to act as if `emitDecoratorMetadata: true` is set in `tsconfig.json`, but without [type-aware linting](https://typescript-eslint.io/linting/typed-linting).
   * In other words, you don't have to specify `parserOptions.project` in this case, making the linting process faster.
   *
   * @default undefined
   *
   * @see [emitDecoratorMetadata](https://typescript-eslint.io/architecture/parser/#emitdecoratormetadata)
   */
  emitDecoratorMetadata?: boolean;

  /**
   * @see [vueFeatures](https://github.com/vuejs/vue-eslint-parser#parseroptionsvuefeatures)
   */
  vueFeatures?: {
    /**
     * You can use `parserOptions.vueFeatures.filter` property to specify whether to parse the Vue2 filter.
     *
     * If you specify `false`, the parser does not parse `|` as a filter.
     *
     * @see [filter](https://github.com/vuejs/vue-eslint-parser#parseroptionsvuefeaturesfilter)
     */
    filter?: boolean;

    /**
     * You can use `parserOptions.vueFeatures.interpolationAsNonHTML` property to specify whether to parse the interpolation as HTML.
     *
     * If you specify `true`, the parser handles the interpolation as non-HTML (However, you can use HTML escaping in the interpolation).
     *
     * @see [interpolationAsNonHTML](https://github.com/vuejs/vue-eslint-parser#parseroptionsvuefeaturesinterpolationasnonhtml)
     */
    interpolationAsNonHTML?: boolean;
  };

  /**
   * @see [templateTokenizer](https://github.com/rashfael/eslint-plugin-vue-pug#usage)
   */
  templateTokenizer?: {
    pug?: LiteralUnion<'vue-eslint-parser-template-tokenizer-pug'>;
  };
}
