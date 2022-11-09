import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface TextEscapingOption {
  escapeHTML?: boolean;
  escapeMarkdown?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type TextEscapingOptions = [TextEscapingOption?];

/**
 *
 * @see [text-escaping](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-text-escaping)
 */
export type TextEscapingRuleConfig = RuleConfig<TextEscapingOptions>;

/**
 *
 * @see [text-escaping](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-text-escaping)
 */
export interface TextEscapingRule {
  /**
   *
   * @see [text-escaping](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-text-escaping)
   */
  'jsdoc/text-escaping': TextEscapingRuleConfig;
}
