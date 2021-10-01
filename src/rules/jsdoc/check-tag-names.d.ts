import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CheckTagNamesOption {
  definedTags?: string[];
  jsxTags?: boolean;
}

/**
 * Options.
 */
export type CheckTagNamesOptions = [CheckTagNamesOption?];

/**
 * Reports invalid block tag names.
 *
 * @see [check-tag-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names)
 */
export type CheckTagNamesRuleConfig = RuleConfig<CheckTagNamesOptions>;

/**
 * Reports invalid block tag names.
 *
 * @see [check-tag-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names)
 */
export interface CheckTagNamesRule {
  /**
   * Reports invalid block tag names.
   *
   * @see [check-tag-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names)
   */
  'jsdoc/check-tag-names': CheckTagNamesRuleConfig;
}
