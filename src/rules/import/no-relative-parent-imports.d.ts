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
 *
 * @see [no-relative-parent-imports](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-relative-parent-imports.md)
 */
export type NoRelativeParentImportsRuleConfig =
  RuleConfig<NoRelativeParentImportsOptions>;

/**
 *
 * @see [no-relative-parent-imports](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-relative-parent-imports.md)
 */
export interface NoRelativeParentImportsRule {
  /**
   *
   * @see [no-relative-parent-imports](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-relative-parent-imports.md)
   */
  'import/no-relative-parent-imports': NoRelativeParentImportsRuleConfig;
}
