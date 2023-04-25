import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnstableNestedComponentsOption {
  customValidators?: string[];
  allowAsProps?: boolean;
}

/**
 * Options.
 */
export type NoUnstableNestedComponentsOptions = [
  NoUnstableNestedComponentsOption?,
];

/**
 * Disallow creating unstable components inside components.
 *
 * @see [no-unstable-nested-components](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md)
 */
export type NoUnstableNestedComponentsRuleConfig =
  RuleConfig<NoUnstableNestedComponentsOptions>;

/**
 * Disallow creating unstable components inside components.
 *
 * @see [no-unstable-nested-components](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md)
 */
export interface NoUnstableNestedComponentsRule {
  /**
   * Disallow creating unstable components inside components.
   *
   * @see [no-unstable-nested-components](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md)
   */
  'react/no-unstable-nested-components': NoUnstableNestedComponentsRuleConfig;
}
