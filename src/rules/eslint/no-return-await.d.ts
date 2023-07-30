import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary `return await`.
 *
 * @deprecated
 *
 * @see [no-return-await](https://eslint.org/docs/latest/rules/no-return-await)
 */
export type NoReturnAwaitRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary `return await`.
 *
 * @deprecated
 *
 * @see [no-return-await](https://eslint.org/docs/latest/rules/no-return-await)
 */
export interface NoReturnAwaitRule {
  /**
   * Disallow unnecessary `return await`.
   *
   * @deprecated
   *
   * @see [no-return-await](https://eslint.org/docs/latest/rules/no-return-await)
   */
  'no-return-await': NoReturnAwaitRuleConfig;
}
