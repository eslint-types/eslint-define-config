import type { RuleConfig } from '../rule-config';

/**
 * Enforce a valid naming for return value from `render`.
 *
 * @see [render-result-naming-convention](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/render-result-naming-convention.md)
 */
export type RenderResultNamingConventionRuleConfig = RuleConfig<[]>;

/**
 * Enforce a valid naming for return value from `render`.
 *
 * @see [render-result-naming-convention](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/render-result-naming-convention.md)
 */
export interface RenderResultNamingConventionRule {
  /**
   * Enforce a valid naming for return value from `render`.
   *
   * @see [render-result-naming-convention](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/render-result-naming-convention.md)
   */
  'testing-library/render-result-naming-convention': RenderResultNamingConventionRuleConfig;
}
