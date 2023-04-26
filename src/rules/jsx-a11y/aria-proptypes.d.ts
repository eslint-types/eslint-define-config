import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AriaProptypesOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type AriaProptypesOptions = [AriaProptypesOption?];

/**
 * Enforce ARIA state and property values are valid.
 *
 * @see [aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md)
 */
export type AriaProptypesRuleConfig = RuleConfig<AriaProptypesOptions>;

/**
 * Enforce ARIA state and property values are valid.
 *
 * @see [aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md)
 */
export interface AriaProptypesRule {
  /**
   * Enforce ARIA state and property values are valid.
   *
   * @see [aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md)
   */
  'jsx-a11y/aria-proptypes': AriaProptypesRuleConfig;
}
