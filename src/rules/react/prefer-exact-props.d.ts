import type { RuleConfig } from '../rule-config';

/**
 * Prefer exact proptype definitions.
 *
 * @see [prefer-exact-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-exact-props.md)
 */
export type PreferExactPropsRuleConfig = RuleConfig<[]>;

/**
 * Prefer exact proptype definitions.
 *
 * @see [prefer-exact-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-exact-props.md)
 */
export interface PreferExactPropsRule {
  /**
   * Prefer exact proptype definitions.
   *
   * @see [prefer-exact-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-exact-props.md)
   */
  'react/prefer-exact-props': PreferExactPropsRuleConfig;
}
