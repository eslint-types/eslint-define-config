import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnusedPropTypesOption {
  ignore?: string[];
  customValidators?: string[];
  skipShapeProps?: boolean;
}

/**
 * Options.
 */
export type NoUnusedPropTypesOptions = [NoUnusedPropTypesOption?];

/**
 * Disallow definitions of unused propTypes.
 *
 * @see [no-unused-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md)
 */
export type NoUnusedPropTypesRuleConfig = RuleConfig<NoUnusedPropTypesOptions>;

/**
 * Disallow definitions of unused propTypes.
 *
 * @see [no-unused-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md)
 */
export interface NoUnusedPropTypesRule {
  /**
   * Disallow definitions of unused propTypes.
   *
   * @see [no-unused-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md)
   */
  'react/no-unused-prop-types': NoUnusedPropTypesRuleConfig;
}
