import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ExpiringTodoCommentsOption {
  terms?: string[];
  ignore?: any[];
  ignoreDatesOnPullRequests?: boolean;
  allowWarningComments?: boolean;
  date?: string;
}

/**
 * Options.
 */
export type ExpiringTodoCommentsOptions = [ExpiringTodoCommentsOption?];

/**
 * Add expiration conditions to TODO comments.
 *
 * @see [expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/expiring-todo-comments.md)
 */
export type ExpiringTodoCommentsRuleConfig =
  RuleConfig<ExpiringTodoCommentsOptions>;

/**
 * Add expiration conditions to TODO comments.
 *
 * @see [expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/expiring-todo-comments.md)
 */
export interface ExpiringTodoCommentsRule {
  /**
   * Add expiration conditions to TODO comments.
   *
   * @see [expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/expiring-todo-comments.md)
   */
  'unicorn/expiring-todo-comments': ExpiringTodoCommentsRuleConfig;
}
