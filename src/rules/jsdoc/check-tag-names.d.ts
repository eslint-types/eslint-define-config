import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CheckTagNamesOption {
  definedTags?: string[];
  enableFixer?: boolean;
  jsxTags?: boolean;
  typed?: boolean;
}

/**
 * Options.
 */
export type CheckTagNamesOptions = [CheckTagNamesOption?];

/**
 * Reports invalid block tag names.
 *
 * @see [check-tag-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md#repos-sticky-header)
 */
export type CheckTagNamesRuleConfig = RuleConfig<CheckTagNamesOptions>;

/**
 * Reports invalid block tag names.
 *
 * @see [check-tag-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md#repos-sticky-header)
 */
export interface CheckTagNamesRule {
  /**
   * Reports invalid block tag names.
   *
   * @see [check-tag-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md#repos-sticky-header)
   */
  'jsdoc/check-tag-names': CheckTagNamesRuleConfig;
}
