import type { RuleConfig } from '../rule-config';

/**
 * Forbid member access from await expression.
 *
 * @see [no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-await-expression-member.md)
 */
export type NoAwaitExpressionMemberRuleConfig = RuleConfig<[]>;

/**
 * Forbid member access from await expression.
 *
 * @see [no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-await-expression-member.md)
 */
export interface NoAwaitExpressionMemberRule {
  /**
   * Forbid member access from await expression.
   *
   * @see [no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-await-expression-member.md)
   */
  'unicorn/no-await-expression-member': NoAwaitExpressionMemberRuleConfig;
}
