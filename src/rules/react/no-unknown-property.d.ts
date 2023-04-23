import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnknownPropertyOption {
  ignore?: string[];
}

/**
 * Options.
 */
export type NoUnknownPropertyOptions = [NoUnknownPropertyOption?];

/**
 * Disallow usage of unknown DOM property.
 *
 * @see [no-unknown-property](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md)
 */
export type NoUnknownPropertyRuleConfig = RuleConfig<NoUnknownPropertyOptions>;

/**
 * Disallow usage of unknown DOM property.
 *
 * @see [no-unknown-property](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md)
 */
export interface NoUnknownPropertyRule {
  /**
   * Disallow usage of unknown DOM property.
   *
   * @see [no-unknown-property](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md)
   */
  'react/no-unknown-property': NoUnknownPropertyRuleConfig;
}
