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
 * Enforce consistent returning of awaited values.
 *
 * @see [return-await](https://typescript-eslint.io/rules/return-await)
 */
export type ReturnAwaitRuleConfig = RuleConfig<ReturnAwaitOptions>;

/**
 * Enforce consistent returning of awaited values.
 *
 * @see [return-await](https://typescript-eslint.io/rules/return-await)
 */
export interface ReturnAwaitRule {
  /**
   * Enforce consistent returning of awaited values.
   *
   * @see [return-await](https://typescript-eslint.io/rules/return-await)
   */
  '@typescript-eslint/return-await': ReturnAwaitRuleConfig;
}
