import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface StylePropObjectOption {
  allow?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type StylePropObjectOptions = [StylePropObjectOption?];

/**
 * Enforce style prop value is an object.
 *
 * @see [style-prop-object](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md)
 */
export type StylePropObjectRuleConfig = RuleConfig<StylePropObjectOptions>;

/**
 * Enforce style prop value is an object.
 *
 * @see [style-prop-object](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md)
 */
export interface StylePropObjectRule {
  /**
   * Enforce style prop value is an object.
   *
   * @see [style-prop-object](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md)
   */
  'react/style-prop-object': StylePropObjectRuleConfig;
}
