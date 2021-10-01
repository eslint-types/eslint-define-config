import type { RuleConfig } from '../rule-config';

/**
 * Ensure Node.js-style error-first callback pattern is followed.
 *
 * @see [no-callback-literal](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-callback-literal.md)
 */
export type NoCallbackLiteralRuleConfig = RuleConfig<[]>;

/**
 * Ensure Node.js-style error-first callback pattern is followed.
 *
 * @see [no-callback-literal](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-callback-literal.md)
 */
export interface NoCallbackLiteralRule {
  /**
   * Ensure Node.js-style error-first callback pattern is followed.
   *
   * @see [no-callback-literal](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-callback-literal.md)
   */
  'node/no-callback-literal': NoCallbackLiteralRuleConfig;
}
