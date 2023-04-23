import type { RuleConfig } from '../rule-config';

/**
 * Enforce that props are read-only.
 *
 * @see [prefer-read-only-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md)
 */
export type PreferReadOnlyPropsRuleConfig = RuleConfig<[]>;

/**
 * Enforce that props are read-only.
 *
 * @see [prefer-read-only-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md)
 */
export interface PreferReadOnlyPropsRule {
  /**
   * Enforce that props are read-only.
   *
   * @see [prefer-read-only-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md)
   */
  'react/prefer-read-only-props': PreferReadOnlyPropsRuleConfig;
}
