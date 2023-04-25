import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoNoninteractiveElementInteractionsOption {
  handlers?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type NoNoninteractiveElementInteractionsOptions = [
  NoNoninteractiveElementInteractionsOption?,
];

/**
 * Non-interactive elements should not be assigned mouse or keyboard event listeners.
 *
 * @see [no-noninteractive-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md)
 */
export type NoNoninteractiveElementInteractionsRuleConfig =
  RuleConfig<NoNoninteractiveElementInteractionsOptions>;

/**
 * Non-interactive elements should not be assigned mouse or keyboard event listeners.
 *
 * @see [no-noninteractive-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md)
 */
export interface NoNoninteractiveElementInteractionsRule {
  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   *
   * @see [no-noninteractive-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md)
   */
  'jsx-a11y/no-noninteractive-element-interactions': NoNoninteractiveElementInteractionsRuleConfig;
}
