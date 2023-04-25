import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ForbidPropTypesOption {
  forbid?: string[];
  checkContextTypes?: boolean;
  checkChildContextTypes?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type ForbidPropTypesOptions = [ForbidPropTypesOption?];

/**
 * Disallow certain propTypes.
 *
 * @see [forbid-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md)
 */
export type ForbidPropTypesRuleConfig = RuleConfig<ForbidPropTypesOptions>;

/**
 * Disallow certain propTypes.
 *
 * @see [forbid-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md)
 */
export interface ForbidPropTypesRule {
  /**
   * Disallow certain propTypes.
   *
   * @see [forbid-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md)
   */
  'react/forbid-prop-types': ForbidPropTypesRuleConfig;
}
