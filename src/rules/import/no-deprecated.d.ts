import type { RuleConfig } from '../rule-config';

/**
 * Forbid imported names marked with `@deprecated` documentation tag.
 *
 * @see [no-deprecated](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-deprecated.md)
 */
export type NoDeprecatedRuleConfig = RuleConfig<[]>;

/**
 * Forbid imported names marked with `@deprecated` documentation tag.
 *
 * @see [no-deprecated](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-deprecated.md)
 */
export interface NoDeprecatedRule {
  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   *
   * @see [no-deprecated](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-deprecated.md)
   */
  'import/no-deprecated': NoDeprecatedRuleConfig;
}
