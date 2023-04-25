import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SelfClosingCompOption {
  component?: boolean;
  html?: boolean;
}

/**
 * Options.
 */
export type SelfClosingCompOptions = [SelfClosingCompOption?];

/**
 * Disallow extra closing tags for components without children.
 *
 * @see [self-closing-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md)
 */
export type SelfClosingCompRuleConfig = RuleConfig<SelfClosingCompOptions>;

/**
 * Disallow extra closing tags for components without children.
 *
 * @see [self-closing-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md)
 */
export interface SelfClosingCompRule {
  /**
   * Disallow extra closing tags for components without children.
   *
   * @see [self-closing-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md)
   */
  'react/self-closing-comp': SelfClosingCompRuleConfig;
}
