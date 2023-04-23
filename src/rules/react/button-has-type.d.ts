import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ButtonHasTypeOption {
  button?: boolean;
  submit?: boolean;
  reset?: boolean;
}

/**
 * Options.
 */
export type ButtonHasTypeOptions = [ButtonHasTypeOption?];

/**
 * Disallow usage of `button` elements without an explicit `type` attribute.
 *
 * @see [button-has-type](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md)
 */
export type ButtonHasTypeRuleConfig = RuleConfig<ButtonHasTypeOptions>;

/**
 * Disallow usage of `button` elements without an explicit `type` attribute.
 *
 * @see [button-has-type](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md)
 */
export interface ButtonHasTypeRule {
  /**
   * Disallow usage of `button` elements without an explicit `type` attribute.
   *
   * @see [button-has-type](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md)
   */
  'react/button-has-type': ButtonHasTypeRuleConfig;
}
