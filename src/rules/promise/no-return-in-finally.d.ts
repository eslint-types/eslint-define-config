import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-return-in-finally](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md)
 */
export type NoReturnInFinallyRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-return-in-finally](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md)
 */
export interface NoReturnInFinallyRule {
  /**
   *
   * @see [no-return-in-finally](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md)
   */
  'promise/no-return-in-finally': NoReturnInFinallyRuleConfig;
}
