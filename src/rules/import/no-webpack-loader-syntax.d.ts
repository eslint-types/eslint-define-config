import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-webpack-loader-syntax.md)
 */
export type NoWebpackLoaderSyntaxRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-webpack-loader-syntax.md)
 */
export interface NoWebpackLoaderSyntaxRule {
  /**
   *
   * @see [no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-webpack-loader-syntax.md)
   */
  'import/no-webpack-loader-syntax': NoWebpackLoaderSyntaxRuleConfig;
}
