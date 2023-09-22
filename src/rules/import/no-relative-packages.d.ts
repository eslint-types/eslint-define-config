import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRelativePackagesOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
}

/**
 * Options.
 */
export type NoRelativePackagesOptions = [NoRelativePackagesOption?];

/**
 * Forbid importing packages through relative paths.
 *
 * @see [no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-relative-packages.md)
 */
export type NoRelativePackagesRuleConfig =
  RuleConfig<NoRelativePackagesOptions>;

/**
 * Forbid importing packages through relative paths.
 *
 * @see [no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-relative-packages.md)
 */
export interface NoRelativePackagesRule {
  /**
   * Forbid importing packages through relative paths.
   *
   * @see [no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-relative-packages.md)
   */
  'import/no-relative-packages': NoRelativePackagesRuleConfig;
}
