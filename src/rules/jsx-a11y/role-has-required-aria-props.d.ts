import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RoleHasRequiredAriaPropsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type RoleHasRequiredAriaPropsOptions = [RoleHasRequiredAriaPropsOption?];

/**
 * Enforce that elements with ARIA roles must have all required attributes for that role.
 *
 * @see [role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md)
 */
export type RoleHasRequiredAriaPropsRuleConfig =
  RuleConfig<RoleHasRequiredAriaPropsOptions>;

/**
 * Enforce that elements with ARIA roles must have all required attributes for that role.
 *
 * @see [role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md)
 */
export interface RoleHasRequiredAriaPropsRule {
  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   *
   * @see [role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md)
   */
  'jsx-a11y/role-has-required-aria-props': RoleHasRequiredAriaPropsRuleConfig;
}
