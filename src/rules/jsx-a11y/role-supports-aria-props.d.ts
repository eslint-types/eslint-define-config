import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RoleSupportsAriaPropsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type RoleSupportsAriaPropsOptions = [RoleSupportsAriaPropsOption?];

/**
 * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
 *
 * @see [role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md)
 */
export type RoleSupportsAriaPropsRuleConfig =
  RuleConfig<RoleSupportsAriaPropsOptions>;

/**
 * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
 *
 * @see [role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md)
 */
export interface RoleSupportsAriaPropsRule {
  /**
   * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
   *
   * @see [role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md)
   */
  'jsx-a11y/role-supports-aria-props': RoleSupportsAriaPropsRuleConfig;
}
