import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDistractingElementsOption {
  /**
   * @minItems 0
   */
  elements?: ('marquee' | 'blink')[];
  [k: string]: any;
}

/**
 * Options.
 */
export type NoDistractingElementsOptions = [NoDistractingElementsOption?];

/**
 * Enforce distracting elements are not used.
 *
 * @see [no-distracting-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md)
 */
export type NoDistractingElementsRuleConfig =
  RuleConfig<NoDistractingElementsOptions>;

/**
 * Enforce distracting elements are not used.
 *
 * @see [no-distracting-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md)
 */
export interface NoDistractingElementsRule {
  /**
   * Enforce distracting elements are not used.
   *
   * @see [no-distracting-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md)
   */
  'jsx-a11y/no-distracting-elements': NoDistractingElementsRuleConfig;
}
