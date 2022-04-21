import type { LiteralUnion } from './utility-types';

// Some types copied from `@types/eslint` `Linter.ParserOptions`

/**
 * Any valid ECMAScript version number or 'latest':
 *
 * - A version: es3, es5, es6, es7, es8, es9, es10, es11, es12, es13, ...
 * - A year: es2015, es2016, es2017, es2018, es2019, es2020, es2021, es2022, ...
 * - 'latest'
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsecmaversion
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
  | 2015
  | 2016
  | 2017
  | 2018
  | 2019
  | 2020
  | 2021
  | 2022
  | 'latest';

/**
 * Set to "script" (default) or "module" if your code is in ECMAScript modules.
 */
export type SourceType = 'script' | 'module';

/**
 * An object indicating which additional language features you'd like to use.
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
  'babel-eslint' | '@typescript-eslint/parser' | 'vue-eslint-parser'
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
   * - A version: es3, es5, es6, es7, es8, es9, es10, es11, es12, es13, ..., or
   * - A year: es2015, es2016, es2017, es2018, es2019, es2020, es2021, es2022, ..., or
   * - `'latest'`
   *
   * When it's a version or a year, the value must be a number - so do not include the `es` prefix.
   *
   * Specifies the version of ECMAScript syntax you want to use. This is used by the parser to determine how to perform scope analysis, and it affects the default
   *
   * @default 2018
   * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsecmaversion
   */
  ecmaVersion?: EcmaVersion;
  /**
   * Set to "script" (default) or "module" if your code is in ECMAScript modules.
   */
  sourceType?: SourceType;
  /**
   * An object indicating which additional language features you'd like to use.
   */
  ecmaFeatures?: EcmaFeatures;
  jsxPragma?: string;
  jsxFragmentName?: string | null;
  /**
   * @see [lib](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionslib)
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
   * @see [extraFileExtensions](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsextrafileextensions)
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
   * @see [project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject)
   */
  project?: string | string[];
  /**
   * @see [projectFolderIgnoreList](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsprojectfolderignorelist)
   */
  projectFolderIgnoreList?: Array<string | RegExp>;
  range?: boolean;
  tokens?: boolean;
  /**
   * This option allows you to provide the root directory for relative tsconfig paths specified in the `project` option above.
   *
   * @see [tsconfigRootDir](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionstsconfigrootdir)
   */
  tsconfigRootDir?: string;
  useJSXTextNode?: boolean;
  /**
   * This option allows you to toggle the warning that the parser will give you if you use a version of TypeScript which is not explicitly supported.
   *
   * @default true
   *
   * @see [warnOnUnsupportedTypeScriptVersion](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionswarnonunsupportedtypescriptversion)
   */
  warnOnUnsupportedTypeScriptVersion?: boolean;
  /**
   * This option allow you to tell parser to act as if `emitDecoratorMetadata: true` is set in `tsconfig.json`, but without [type-aware linting](https://typescript-eslint.io/docs/linting/type-linting/).
   * In other words, you don't have to specify `parserOptions.project` in this case, making the linting process faster.
   *
   * @default undefined
   *
   * @see [emitDecoratorMetadata](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionsemitdecoratormetadata)
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
