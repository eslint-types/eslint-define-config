import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireDescriptionCompleteSentenceOption {
  abbreviations?: string[];
  newlineBeforeCapsAssumesBadSentenceEnd?: boolean;
  tags?: string[];
}

/**
 * Options.
 */
export type RequireDescriptionCompleteSentenceOptions = [
  RequireDescriptionCompleteSentenceOption?,
];

/**
 * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
 *
 * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence)
 */
export type RequireDescriptionCompleteSentenceRuleConfig =
  RuleConfig<RequireDescriptionCompleteSentenceOptions>;

/**
 * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
 *
 * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence)
 */
export interface RequireDescriptionCompleteSentenceRule {
  /**
   * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
   *
   * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence)
   */
  'jsdoc/require-description-complete-sentence': RequireDescriptionCompleteSentenceRuleConfig;
}
