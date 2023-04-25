import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ForbidForeignPropTypesOption {
  allowInPropTypes?: boolean;
}

/**
 * Options.
 */
export type ForbidForeignPropTypesOptions = [ForbidForeignPropTypesOption?];

/**
 * Disallow using another component's propTypes.
 *
 * @see [forbid-foreign-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md)
 */
export type ForbidForeignPropTypesRuleConfig =
  RuleConfig<ForbidForeignPropTypesOptions>;

/**
 * Disallow using another component's propTypes.
 *
 * @see [forbid-foreign-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md)
 */
export interface ForbidForeignPropTypesRule {
  /**
   * Disallow using another component's propTypes.
   *
   * @see [forbid-foreign-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md)
   */
  'react/forbid-foreign-prop-types': ForbidForeignPropTypesRuleConfig;
}
