import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoVoidOption {
  allowAsStatement?: boolean;
}

/**
 * Options.
 */
export type NoVoidOptions = [NoVoidOption?];

/**
 * Disallow `void` operators.
 *
 * @see [no-void](https://eslint.org/docs/latest/rules/no-void)
 */
export type NoVoidRuleConfig = RuleConfig<NoVoidOptions>;

/**
 * Disallow `void` operators.
 *
 * @see [no-void](https://eslint.org/docs/latest/rules/no-void)
 */
export interface NoVoidRule {
  /**
   * Disallow `void` operators.
   *
   * @see [no-void](https://eslint.org/docs/latest/rules/no-void)
   */
  'no-void': NoVoidRuleConfig;
}
