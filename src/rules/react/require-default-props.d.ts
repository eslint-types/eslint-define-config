import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireDefaultPropsOption {
  forbidDefaultForRequired?: boolean;
  classes?: 'defaultProps' | 'ignore';
  functions?: 'defaultArguments' | 'defaultProps' | 'ignore';
  ignoreFunctionalComponents?: boolean;
}

/**
 * Options.
 */
export type RequireDefaultPropsOptions = [RequireDefaultPropsOption?];

/**
 * Enforce a defaultProps definition for every prop that is not a required prop.
 *
 * @see [require-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md)
 */
export type RequireDefaultPropsRuleConfig =
  RuleConfig<RequireDefaultPropsOptions>;

/**
 * Enforce a defaultProps definition for every prop that is not a required prop.
 *
 * @see [require-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md)
 */
export interface RequireDefaultPropsRule {
  /**
   * Enforce a defaultProps definition for every prop that is not a required prop.
   *
   * @see [require-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md)
   */
  'react/require-default-props': RequireDefaultPropsRuleConfig;
}
