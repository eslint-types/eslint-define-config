import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface BooleanPropNamingOption {
  /**
   * @minItems 1
   */
  propTypeNames?: [string, ...string[]];
  rule?: string;
  message?: string;
  validateNested?: boolean;
}

/**
 * Options.
 */
export type BooleanPropNamingOptions = [BooleanPropNamingOption?];

/**
 * Enforces consistent naming for boolean props.
 *
 * @see [boolean-prop-naming](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md)
 */
export type BooleanPropNamingRuleConfig = RuleConfig<BooleanPropNamingOptions>;

/**
 * Enforces consistent naming for boolean props.
 *
 * @see [boolean-prop-naming](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md)
 */
export interface BooleanPropNamingRule {
  /**
   * Enforces consistent naming for boolean props.
   *
   * @see [boolean-prop-naming](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md)
   */
  'react/boolean-prop-naming': BooleanPropNamingRuleConfig;
}
