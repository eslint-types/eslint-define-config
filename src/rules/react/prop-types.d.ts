import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PropTypesOption {
  ignore?: string[];
  customValidators?: string[];
  skipUndeclared?: boolean;
}

/**
 * Options.
 */
export type PropTypesOptions = [PropTypesOption?];

/**
 * Disallow missing props validation in a React component definition.
 *
 * @see [prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md)
 */
export type PropTypesRuleConfig = RuleConfig<PropTypesOptions>;

/**
 * Disallow missing props validation in a React component definition.
 *
 * @see [prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md)
 */
export interface PropTypesRule {
  /**
   * Disallow missing props validation in a React component definition.
   *
   * @see [prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md)
   */
  'react/prop-types': PropTypesRuleConfig;
}
