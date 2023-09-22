import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRelativeParentImportsOption {
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
export type NoRelativeParentImportsOptions = [NoRelativeParentImportsOption?];

/**
 * Forbid importing modules from parent directories.
 *
 * @see [no-relative-parent-imports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-relative-parent-imports.md)
 */
export type NoRelativeParentImportsRuleConfig =
  RuleConfig<NoRelativeParentImportsOptions>;

/**
 * Forbid importing modules from parent directories.
 *
 * @see [no-relative-parent-imports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-relative-parent-imports.md)
 */
export interface NoRelativeParentImportsRule {
  /**
   * Forbid importing modules from parent directories.
   *
   * @see [no-relative-parent-imports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-relative-parent-imports.md)
   */
  'import/no-relative-parent-imports': NoRelativeParentImportsRuleConfig;
}
