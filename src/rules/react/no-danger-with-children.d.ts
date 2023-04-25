import type { RuleConfig } from '../rule-config';

/**
 * Disallow when a DOM element is using both children and dangerouslySetInnerHTML.
 *
 * @see [no-danger-with-children](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md)
 */
export type NoDangerWithChildrenRuleConfig = RuleConfig<[]>;

/**
 * Disallow when a DOM element is using both children and dangerouslySetInnerHTML.
 *
 * @see [no-danger-with-children](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md)
 */
export interface NoDangerWithChildrenRule {
  /**
   * Disallow when a DOM element is using both children and dangerouslySetInnerHTML.
   *
   * @see [no-danger-with-children](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md)
   */
  'react/no-danger-with-children': NoDangerWithChildrenRuleConfig;
}
