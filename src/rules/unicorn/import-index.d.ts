import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ImportIndexOption {
  ignoreImports?: boolean;
}

/**
 * Options.
 */
export type ImportIndexOptions = [ImportIndexOption?];

/**
 * Enforce importing index files with `.`.
 *
 * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/import-index.md)
 */
export type ImportIndexRuleConfig = RuleConfig<ImportIndexOptions>;

/**
 * Enforce importing index files with `.`.
 *
 * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/import-index.md)
 */
export interface ImportIndexRule {
  /**
   * Enforce importing index files with `.`.
   *
   * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/import-index.md)
   */
  'unicorn/import-index': ImportIndexRuleConfig;
}
