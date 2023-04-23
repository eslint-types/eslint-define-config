import type { RuleConfig } from '../rule-config';

/**
 * Suggest using `vi.spyOn`.
 *
 * @see [prefer-spy-on](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md)
 */
export type PreferSpyOnRuleConfig = RuleConfig<[]>;

/**
 * Suggest using `vi.spyOn`.
 *
 * @see [prefer-spy-on](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md)
 */
export interface PreferSpyOnRule {
  /**
   * Suggest using `vi.spyOn`.
   *
   * @see [prefer-spy-on](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md)
   */
  'vitest/prefer-spy-on': PreferSpyOnRuleConfig;
}
