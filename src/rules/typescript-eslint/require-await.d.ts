import type { RuleConfig } from '../rule-config';

/**
 * Disallow async functions which have no `await` expression.
 *
 * @see [require-await](https://typescript-eslint.io/rules/require-await)
 */
export type RequireAwaitRuleConfig = RuleConfig<[]>;

/**
 * Disallow async functions which have no `await` expression.
 *
 * @see [require-await](https://typescript-eslint.io/rules/require-await)
 */
export interface RequireAwaitRule {
  /**
   * Disallow async functions which have no `await` expression.
   *
   * @see [require-await](https://typescript-eslint.io/rules/require-await)
   */
  '@typescript-eslint/require-await': RequireAwaitRuleConfig;
}
