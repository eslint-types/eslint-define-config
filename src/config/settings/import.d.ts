import type { Parser } from '../../parser-options';

/**
 * Import settings.
 */
export interface ImportSettings {
  /**
   * A list of file extensions that will be parsed as modules and inspected for `export`s.
   *
   * @see [import/extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#importextensions)
   */
  'import/extensions'?: string[];

  /**
   * If you require more granular extension definitions.
   *
   * @see [import/resolver](https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#importresolver)
   */
  'import/resolver'?: string | Record<string, unknown>;

  /**
   * A list of regex strings that, if matched by a path, will not report the matching module if no `exports` are found.
   *
   * @see [import/ignore](https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#importignore)
   */
  'import/ignore'?: string[];

  /**
   * An array of additional modules to consider as "core" modules--modules that should be considered resolved but have no path on the filesystem.
   *
   * @see [import/core-modules](https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#importcore-modules)
   */
  'import/core-modules'?: string[];

  /**
   * An array of folders. Resolved modules only from those folders will be considered as "external".
   *
   * @default ["node_modules"]
   *
   * @see [import/external-module-folders](https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#importexternal-module-folders)
   */
  'import/external-module-folders'?: string[];

  /**
   * A map from parsers to file extension arrays.
   *
   * @see [import/parsers](https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#importparsers)
   */
  'import/parsers'?: Partial<Record<Parser, string[]>>;

  /**
   * Settings for cache behavior.
   *
   * @see [import/cache](https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#importcache)
   */
  'import/cache'?: { lifetime?: number } & Record<string, unknown>;

  /**
   * A regex for packages should be treated as internal.
   *
   * Useful when you are utilizing a monorepo setup or developing a set of packages that depend on each other.
   *
   * @see [import/internal-regex](https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#importinternal-regex)
   */
  'import/internal-regex'?: string;
}
