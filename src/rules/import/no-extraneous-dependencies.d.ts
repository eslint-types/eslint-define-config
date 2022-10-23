import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExtraneousDependenciesOption {
  devDependencies?: boolean | any[];
  optionalDependencies?: boolean | any[];
  peerDependencies?: boolean | any[];
  bundledDependencies?: boolean | any[];
  packageDir?: string | any[];
}

/**
 * Options.
 */
export type NoExtraneousDependenciesOptions = [NoExtraneousDependenciesOption?];

/**
 *
 * @see [no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-extraneous-dependencies.md)
 */
export type NoExtraneousDependenciesRuleConfig =
  RuleConfig<NoExtraneousDependenciesOptions>;

/**
 *
 * @see [no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-extraneous-dependencies.md)
 */
export interface NoExtraneousDependenciesRule {
  /**
   *
   * @see [no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-extraneous-dependencies.md)
   */
  'import/no-extraneous-dependencies': NoExtraneousDependenciesRuleConfig;
}
