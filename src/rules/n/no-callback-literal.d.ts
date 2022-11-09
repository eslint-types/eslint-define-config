import type { RuleConfig } from '../rule-config';

/**
 * Enforce Node.js-style error-first callback pattern is followed.
 *
 * @see [no-callback-literal](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-callback-literal.md)
 */
export type NoCallbackLiteralRuleConfig = RuleConfig<[]>;

/**
 * Enforce Node.js-style error-first callback pattern is followed.
 *
 * @see [no-callback-literal](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-callback-literal.md)
 */
export interface NoCallbackLiteralRule {
  /**
   * Enforce Node.js-style error-first callback pattern is followed.
   *
   * @see [no-callback-literal](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-callback-literal.md)
   */
  'n/no-callback-literal': NoCallbackLiteralRuleConfig;
}
