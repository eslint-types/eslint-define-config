import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireFileOverviewOption {
  tags?: {
    /**
     */
    [k: string]: {
      initialCommentsOnly?: boolean;
      mustExist?: boolean;
      preventDuplicates?: boolean;
    };
  };
}

/**
 * Options.
 */
export type RequireFileOverviewOptions = [RequireFileOverviewOption?];

/**
 * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
 *
 * @see [require-file-overview](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header)
 */
export type RequireFileOverviewRuleConfig =
  RuleConfig<RequireFileOverviewOptions>;

/**
 * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
 *
 * @see [require-file-overview](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header)
 */
export interface RequireFileOverviewRule {
  /**
   * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
   *
   * @see [require-file-overview](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header)
   */
  'jsdoc/require-file-overview': RequireFileOverviewRuleConfig;
}
