import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface TextEscapingOption {
  escapeHTML?: boolean;
  escapeMarkdown?: boolean;
}

/**
 * Options.
 */
export type TextEscapingOptions = [TextEscapingOption?];

/**
 *
 * @see [text-escaping](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md#repos-sticky-header)
 */
export type TextEscapingRuleConfig = RuleConfig<TextEscapingOptions>;

/**
 *
 * @see [text-escaping](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md#repos-sticky-header)
 */
export interface TextEscapingRule {
  /**
   *
   * @see [text-escaping](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md#repos-sticky-header)
   */
  'jsdoc/text-escaping': TextEscapingRuleConfig;
}
