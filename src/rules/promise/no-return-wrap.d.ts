import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoReturnWrapOption {
  allowReject?: boolean;
}

/**
 * Options.
 */
export type NoReturnWrapOptions = [NoReturnWrapOption?];

/**
 *
 * @see [no-return-wrap](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md)
 */
export type NoReturnWrapRuleConfig = RuleConfig<NoReturnWrapOptions>;

/**
 *
 * @see [no-return-wrap](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md)
 */
export interface NoReturnWrapRule {
  /**
   *
   * @see [no-return-wrap](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md)
   */
  'promise/no-return-wrap': NoReturnWrapRuleConfig;
}
