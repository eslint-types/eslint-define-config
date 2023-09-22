import type { RuleConfig } from '../rule-config';

/**
 * Forbid webpack loader syntax in imports.
 *
 * @see [no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-webpack-loader-syntax.md)
 */
export type NoWebpackLoaderSyntaxRuleConfig = RuleConfig<[]>;

/**
 * Forbid webpack loader syntax in imports.
 *
 * @see [no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-webpack-loader-syntax.md)
 */
export interface NoWebpackLoaderSyntaxRule {
  /**
   * Forbid webpack loader syntax in imports.
   *
   * @see [no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-webpack-loader-syntax.md)
   */
  'import/no-webpack-loader-syntax': NoWebpackLoaderSyntaxRuleConfig;
}
