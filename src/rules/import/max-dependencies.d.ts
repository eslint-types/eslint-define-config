import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MaxDependenciesOption {
  max?: number;
  ignoreTypeImports?: boolean;
}

/**
 * Options.
 */
export type MaxDependenciesOptions = [MaxDependenciesOption?];

/**
 *
 * @see [max-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/max-dependencies.md)
 */
export type MaxDependenciesRuleConfig = RuleConfig<MaxDependenciesOptions>;

/**
 *
 * @see [max-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/max-dependencies.md)
 */
export interface MaxDependenciesRule {
  /**
   *
   * @see [max-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/max-dependencies.md)
   */
  'import/max-dependencies': MaxDependenciesRuleConfig;
}
