import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferNumberPropertiesOption {
  checkInfinity?: boolean;
}

/**
 * Options.
 */
export type PreferNumberPropertiesOptions = [PreferNumberPropertiesOption?];

/**
 * Prefer `Number` static properties over global ones.
 *
 * @see [prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-number-properties.md)
 */
export type PreferNumberPropertiesRuleConfig =
  RuleConfig<PreferNumberPropertiesOptions>;

/**
 * Prefer `Number` static properties over global ones.
 *
 * @see [prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-number-properties.md)
 */
export interface PreferNumberPropertiesRule {
  /**
   * Prefer `Number` static properties over global ones.
   *
   * @see [prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-number-properties.md)
   */
  'unicorn/prefer-number-properties': PreferNumberPropertiesRuleConfig;
}
