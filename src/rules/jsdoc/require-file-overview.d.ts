import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireFileOverviewOption = {
  tags?: Record<string, any>;
};

/**
 * Options.
 */
export type RequireFileOverviewOptions = [RequireFileOverviewOption?];

/**
 * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
 *
 * @see [require-file-overview](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview)
 */
export type RequireFileOverviewRuleConfig = RuleConfig<RequireFileOverviewOptions>;

/**
 * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
 *
 * @see [require-file-overview](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview)
 */
export interface RequireFileOverviewRule {
  /**
   * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
   *
   * @see [require-file-overview](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview)
   */
  'jsdoc/require-file-overview': RequireFileOverviewRuleConfig;
}
