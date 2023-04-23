import type { RuleConfig } from '../rule-config';

/**
 * Suggest using `test.todo`.
 *
 * @see [prefer-todo](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md)
 */
export type PreferTodoRuleConfig = RuleConfig<[]>;

/**
 * Suggest using `test.todo`.
 *
 * @see [prefer-todo](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md)
 */
export interface PreferTodoRule {
  /**
   * Suggest using `test.todo`.
   *
   * @see [prefer-todo](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md)
   */
  'vitest/prefer-todo': PreferTodoRuleConfig;
}
