import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferTagOverRoleOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type PreferTagOverRoleOptions = [PreferTagOverRoleOption?];

/**
 * Enforces using semantic DOM elements over the ARIA `role` property.
 *
 * @see [prefer-tag-over-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/prefer-tag-over-role.md)
 */
export type PreferTagOverRoleRuleConfig = RuleConfig<PreferTagOverRoleOptions>;

/**
 * Enforces using semantic DOM elements over the ARIA `role` property.
 *
 * @see [prefer-tag-over-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/prefer-tag-over-role.md)
 */
export interface PreferTagOverRoleRule {
  /**
   * Enforces using semantic DOM elements over the ARIA `role` property.
   *
   * @see [prefer-tag-over-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/prefer-tag-over-role.md)
   */
  'jsx-a11y/prefer-tag-over-role': PreferTagOverRoleRuleConfig;
}
