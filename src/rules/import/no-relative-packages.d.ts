import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRelativePackagesOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  ignore?: [string, ...string[]];
}

/**
 * Options.
 */
export type NoRelativePackagesOptions = [NoRelativePackagesOption?];

/**
 *
 *
 * @see [no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-relative-packages.md)
 */
export type NoRelativePackagesRuleConfig =
  RuleConfig<NoRelativePackagesOptions>;

/**
 *
 *
 * @see [no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-relative-packages.md)
 */
export interface NoRelativePackagesRule {
  /**
   *
   *
   * @see [no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-relative-packages.md)
   */
  'import/no-relative-packages': NoRelativePackagesRuleConfig;
}
