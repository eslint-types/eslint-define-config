import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ReturnAwaitOption = 'in-try-catch' | 'always' | 'never';

/**
 * Options.
 */
export type ReturnAwaitOptions = [ReturnAwaitOption?];

/**
 * Enforces consistent returning of awaited values.
 *
 * @see [return-await](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/return-await.md)
 */
export type ReturnAwaitRuleConfig = RuleConfig<ReturnAwaitOptions>;

/**
 * Enforces consistent returning of awaited values.
 *
 * @see [return-await](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/return-await.md)
 */
export interface ReturnAwaitRule {
  /**
   * Enforces consistent returning of awaited values.
   *
   * @see [return-await](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/return-await.md)
   */
  '@typescript-eslint/return-await': ReturnAwaitRuleConfig;
}
