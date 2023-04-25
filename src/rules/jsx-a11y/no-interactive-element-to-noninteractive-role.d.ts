import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoInteractiveElementToNoninteractiveRoleOption {
  [k: string]: string[];
}

/**
 * Options.
 */
export type NoInteractiveElementToNoninteractiveRoleOptions = [
  NoInteractiveElementToNoninteractiveRoleOption?,
];

/**
 * Interactive elements should not be assigned non-interactive roles.
 *
 * @see [no-interactive-element-to-noninteractive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md)
 */
export type NoInteractiveElementToNoninteractiveRoleRuleConfig =
  RuleConfig<NoInteractiveElementToNoninteractiveRoleOptions>;

/**
 * Interactive elements should not be assigned non-interactive roles.
 *
 * @see [no-interactive-element-to-noninteractive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md)
 */
export interface NoInteractiveElementToNoninteractiveRoleRule {
  /**
   * Interactive elements should not be assigned non-interactive roles.
   *
   * @see [no-interactive-element-to-noninteractive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md)
   */
  'jsx-a11y/no-interactive-element-to-noninteractive-role': NoInteractiveElementToNoninteractiveRoleRuleConfig;
}
