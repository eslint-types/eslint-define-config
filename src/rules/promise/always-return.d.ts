import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AlwaysReturnOption {
  ignoreLastCallback?: boolean;
}

/**
 * Options.
 */
export type AlwaysReturnOptions = [AlwaysReturnOption?];

/**
 *
 * @see [always-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md)
 */
export type AlwaysReturnRuleConfig = RuleConfig<AlwaysReturnOptions>;

/**
 *
 * @see [always-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md)
 */
export interface AlwaysReturnRule {
  /**
   *
   * @see [always-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md)
   */
  'promise/always-return': AlwaysReturnRuleConfig;
}
