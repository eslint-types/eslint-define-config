import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AriaRoleOption {
  allowedInvalidRoles?: string[];
  ignoreNonDOM?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type AriaRoleOptions = [AriaRoleOption?];

/**
 * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
 *
 * @see [aria-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md)
 */
export type AriaRoleRuleConfig = RuleConfig<AriaRoleOptions>;

/**
 * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
 *
 * @see [aria-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md)
 */
export interface AriaRoleRule {
  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   *
   * @see [aria-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md)
   */
  'jsx-a11y/aria-role': AriaRoleRuleConfig;
}
