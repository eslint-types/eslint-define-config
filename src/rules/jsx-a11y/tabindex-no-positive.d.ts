import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface TabindexNoPositiveOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type TabindexNoPositiveOptions = [TabindexNoPositiveOption?];

/**
 * Enforce `tabIndex` value is not greater than zero.
 *
 * @see [tabindex-no-positive](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md)
 */
export type TabindexNoPositiveRuleConfig =
  RuleConfig<TabindexNoPositiveOptions>;

/**
 * Enforce `tabIndex` value is not greater than zero.
 *
 * @see [tabindex-no-positive](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md)
 */
export interface TabindexNoPositiveRule {
  /**
   * Enforce `tabIndex` value is not greater than zero.
   *
   * @see [tabindex-no-positive](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md)
   */
  'jsx-a11y/tabindex-no-positive': TabindexNoPositiveRuleConfig;
}
