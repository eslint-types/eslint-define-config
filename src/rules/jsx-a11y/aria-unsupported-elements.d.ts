import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AriaUnsupportedElementsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type AriaUnsupportedElementsOptions = [AriaUnsupportedElementsOption?];

/**
 * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
 *
 * @see [aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md)
 */
export type AriaUnsupportedElementsRuleConfig =
  RuleConfig<AriaUnsupportedElementsOptions>;

/**
 * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
 *
 * @see [aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md)
 */
export interface AriaUnsupportedElementsRule {
  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
   *
   * @see [aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md)
   */
  'jsx-a11y/aria-unsupported-elements': AriaUnsupportedElementsRuleConfig;
}
