import type { RuleConfig } from '../rule-config';

/**
 * Disallow multiple spaces between inline JSX props.
 *
 * @see [jsx-props-no-multi-spaces](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md)
 */
export type JsxPropsNoMultiSpacesRuleConfig = RuleConfig<[]>;

/**
 * Disallow multiple spaces between inline JSX props.
 *
 * @see [jsx-props-no-multi-spaces](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md)
 */
export interface JsxPropsNoMultiSpacesRule {
  /**
   * Disallow multiple spaces between inline JSX props.
   *
   * @see [jsx-props-no-multi-spaces](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md)
   */
  'react/jsx-props-no-multi-spaces': JsxPropsNoMultiSpacesRuleConfig;
}
