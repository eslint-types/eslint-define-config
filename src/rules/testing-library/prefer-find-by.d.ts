import type { RuleConfig } from '../rule-config';

/**
 * Suggest using `find(All)By*` query instead of `waitFor` + `get(All)By*` to wait for elements.
 *
 * @see [prefer-find-by](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-find-by.md)
 */
export type PreferFindByRuleConfig = RuleConfig<[]>;

/**
 * Suggest using `find(All)By*` query instead of `waitFor` + `get(All)By*` to wait for elements.
 *
 * @see [prefer-find-by](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-find-by.md)
 */
export interface PreferFindByRule {
  /**
   * Suggest using `find(All)By*` query instead of `waitFor` + `get(All)By*` to wait for elements.
   *
   * @see [prefer-find-by](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-find-by.md)
   */
  'testing-library/prefer-find-by': PreferFindByRuleConfig;
}
