import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoNoninteractiveElementToInteractiveRoleOption {
  [k: string]: string[];
}

/**
 * Options.
 */
export type NoNoninteractiveElementToInteractiveRoleOptions = [
  NoNoninteractiveElementToInteractiveRoleOption?,
];

/**
 * Non-interactive elements should not be assigned interactive roles.
 *
 * @see [no-noninteractive-element-to-interactive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md)
 */
export type NoNoninteractiveElementToInteractiveRoleRuleConfig =
  RuleConfig<NoNoninteractiveElementToInteractiveRoleOptions>;

/**
 * Non-interactive elements should not be assigned interactive roles.
 *
 * @see [no-noninteractive-element-to-interactive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md)
 */
export interface NoNoninteractiveElementToInteractiveRoleRule {
  /**
   * Non-interactive elements should not be assigned interactive roles.
   *
   * @see [no-noninteractive-element-to-interactive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md)
   */
  'jsx-a11y/no-noninteractive-element-to-interactive-role': NoNoninteractiveElementToInteractiveRoleRuleConfig;
}
