import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoChildrenPropOption {
  allowFunctions?: boolean;
}

/**
 * Options.
 */
export type NoChildrenPropOptions = [NoChildrenPropOption?];

/**
 * Disallow passing of children as props.
 *
 * @see [no-children-prop](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md)
 */
export type NoChildrenPropRuleConfig = RuleConfig<NoChildrenPropOptions>;

/**
 * Disallow passing of children as props.
 *
 * @see [no-children-prop](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md)
 */
export interface NoChildrenPropRule {
  /**
   * Disallow passing of children as props.
   *
   * @see [no-children-prop](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md)
   */
  'react/no-children-prop': NoChildrenPropRuleConfig;
}
