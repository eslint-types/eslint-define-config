import type { RuleConfig } from '../rule-config';

/**
 * Disallow identical titles.
 *
 * @see [no-identical-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md)
 */
export type NoIdenticalTitleRuleConfig = RuleConfig<[]>;

/**
 * Disallow identical titles.
 *
 * @see [no-identical-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md)
 */
export interface NoIdenticalTitleRule {
  /**
   * Disallow identical titles.
   *
   * @see [no-identical-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md)
   */
  'vitest/no-identical-title': NoIdenticalTitleRuleConfig;
}
