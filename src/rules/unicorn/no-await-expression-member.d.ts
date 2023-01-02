import type { RuleConfig } from '../rule-config';

/**
 * Disallow member access from await expression.
 *
 * @see [no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-await-expression-member.md)
 */
export type NoAwaitExpressionMemberRuleConfig = RuleConfig<[]>;

/**
 * Disallow member access from await expression.
 *
 * @see [no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-await-expression-member.md)
 */
export interface NoAwaitExpressionMemberRule {
  /**
   * Disallow member access from await expression.
   *
   * @see [no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-await-expression-member.md)
   */
  'unicorn/no-await-expression-member': NoAwaitExpressionMemberRuleConfig;
}
