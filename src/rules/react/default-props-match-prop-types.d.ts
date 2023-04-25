import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface DefaultPropsMatchPropTypesOption {
  allowRequiredDefaults?: boolean;
}

/**
 * Options.
 */
export type DefaultPropsMatchPropTypesOptions = [
  DefaultPropsMatchPropTypesOption?,
];

/**
 * Enforce all defaultProps have a corresponding non-required PropType.
 *
 * @see [default-props-match-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md)
 */
export type DefaultPropsMatchPropTypesRuleConfig =
  RuleConfig<DefaultPropsMatchPropTypesOptions>;

/**
 * Enforce all defaultProps have a corresponding non-required PropType.
 *
 * @see [default-props-match-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md)
 */
export interface DefaultPropsMatchPropTypesRule {
  /**
   * Enforce all defaultProps have a corresponding non-required PropType.
   *
   * @see [default-props-match-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md)
   */
  'react/default-props-match-prop-types': DefaultPropsMatchPropTypesRuleConfig;
}
