import type { RuleConfig } from '../rule-config';

/**
 * Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children.
 *
 * @see [void-dom-elements-no-children](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md)
 */
export type VoidDomElementsNoChildrenRuleConfig = RuleConfig<[]>;

/**
 * Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children.
 *
 * @see [void-dom-elements-no-children](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md)
 */
export interface VoidDomElementsNoChildrenRule {
  /**
   * Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children.
   *
   * @see [void-dom-elements-no-children](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md)
   */
  'react/void-dom-elements-no-children': VoidDomElementsNoChildrenRuleConfig;
}
