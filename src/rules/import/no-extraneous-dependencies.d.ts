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
  includeInternal?: boolean;
  includeTypes?: boolean;
}

/**
 * Options.
 */
export type NoExtraneousDependenciesOptions = [NoExtraneousDependenciesOption?];

/**
 * Forbid the use of extraneous packages.
 *
 * @see [no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-extraneous-dependencies.md)
 */
export type NoExtraneousDependenciesRuleConfig =
  RuleConfig<NoExtraneousDependenciesOptions>;

/**
 * Forbid the use of extraneous packages.
 *
 * @see [no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-extraneous-dependencies.md)
 */
export interface NoExtraneousDependenciesRule {
  /**
   * Forbid the use of extraneous packages.
   *
   * @see [no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-extraneous-dependencies.md)
   */
  'import/no-extraneous-dependencies': NoExtraneousDependenciesRuleConfig;
}
