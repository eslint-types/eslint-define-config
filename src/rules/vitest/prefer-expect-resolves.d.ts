import type { RuleConfig } from '../rule-config';

/**
 * Suggest using `expect().resolves` over `expect(await ...)` syntax.
 *
 * @see [prefer-expect-resolves](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md)
 */
export type PreferExpectResolvesRuleConfig = RuleConfig<[]>;

/**
 * Suggest using `expect().resolves` over `expect(await ...)` syntax.
 *
 * @see [prefer-expect-resolves](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md)
 */
export interface PreferExpectResolvesRule {
  /**
   * Suggest using `expect().resolves` over `expect(await ...)` syntax.
   *
   * @see [prefer-expect-resolves](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md)
   */
  'vitest/prefer-expect-resolves': PreferExpectResolvesRuleConfig;
}
