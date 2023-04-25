import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AriaActivedescendantHasTabindexOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type AriaActivedescendantHasTabindexOptions = [
  AriaActivedescendantHasTabindexOption?,
];

/**
 * Enforce elements with aria-activedescendant are tabbable.
 *
 * @see [aria-activedescendant-has-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md)
 */
export type AriaActivedescendantHasTabindexRuleConfig =
  RuleConfig<AriaActivedescendantHasTabindexOptions>;

/**
 * Enforce elements with aria-activedescendant are tabbable.
 *
 * @see [aria-activedescendant-has-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md)
 */
export interface AriaActivedescendantHasTabindexRule {
  /**
   * Enforce elements with aria-activedescendant are tabbable.
   *
   * @see [aria-activedescendant-has-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md)
   */
  'jsx-a11y/aria-activedescendant-has-tabindex': AriaActivedescendantHasTabindexRuleConfig;
}
