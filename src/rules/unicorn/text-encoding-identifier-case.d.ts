import type { RuleConfig } from '../rule-config';

/**
 * Enforce consistent case for text encoding identifiers.
 *
 * @see [text-encoding-identifier-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/text-encoding-identifier-case.md)
 */
export type TextEncodingIdentifierCaseRuleConfig = RuleConfig<[]>;

/**
 * Enforce consistent case for text encoding identifiers.
 *
 * @see [text-encoding-identifier-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/text-encoding-identifier-case.md)
 */
export interface TextEncodingIdentifierCaseRule {
  /**
   * Enforce consistent case for text encoding identifiers.
   *
   * @see [text-encoding-identifier-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/text-encoding-identifier-case.md)
   */
  'unicorn/text-encoding-identifier-case': TextEncodingIdentifierCaseRuleConfig;
}
