import type { RuleConfig } from '../rule-config';

/**
 * Disallow async functions which have no `await` expression.
 *
 * @see [require-await](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/require-await.md)
 */
export type RequireAwaitRuleConfig = RuleConfig<[]>;

/**
 * Disallow async functions which have no `await` expression.
 *
 * @see [require-await](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/require-await.md)
 */
export interface RequireAwaitRule {
  /**
   * Disallow async functions which have no `await` expression.
   *
   * @see [require-await](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/require-await.md)
   */
  '@typescript-eslint/require-await': RequireAwaitRuleConfig;
}
