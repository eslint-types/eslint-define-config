import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoStaticElementInteractionsOption {
  handlers?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type NoStaticElementInteractionsOptions = [
  NoStaticElementInteractionsOption?,
];

/**
 * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
 *
 * @see [no-static-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md)
 */
export type NoStaticElementInteractionsRuleConfig =
  RuleConfig<NoStaticElementInteractionsOptions>;

/**
 * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
 *
 * @see [no-static-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md)
 */
export interface NoStaticElementInteractionsRule {
  /**
   * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
   *
   * @see [no-static-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md)
   */
  'jsx-a11y/no-static-element-interactions': NoStaticElementInteractionsRuleConfig;
}
