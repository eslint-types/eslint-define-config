import type { RuleConfig } from '../rule-config';

/**
 * Disallow adjacent inline elements not separated by whitespace.
 *
 * @see [no-adjacent-inline-elements](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md)
 */
export type NoAdjacentInlineElementsRuleConfig = RuleConfig<[]>;

/**
 * Disallow adjacent inline elements not separated by whitespace.
 *
 * @see [no-adjacent-inline-elements](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md)
 */
export interface NoAdjacentInlineElementsRule {
  /**
   * Disallow adjacent inline elements not separated by whitespace.
   *
   * @see [no-adjacent-inline-elements](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md)
   */
  'react/no-adjacent-inline-elements': NoAdjacentInlineElementsRuleConfig;
}
