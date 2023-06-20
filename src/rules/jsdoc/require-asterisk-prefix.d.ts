import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface RequireAsteriskPrefixConfig {
  tags?: {
    always?: string[];
    any?: string[];
    never?: string[];
    [k: string]: any;
  };
}

/**
 * Option.
 */
export type RequireAsteriskPrefixOption = 'always' | 'never' | 'any';

/**
 * Options.
 */
export type RequireAsteriskPrefixOptions = [
  RequireAsteriskPrefixOption?,
  RequireAsteriskPrefixConfig?,
];

/**
 * Requires that each JSDoc line starts with an `*`.
 *
 * @see [require-asterisk-prefix](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header)
 */
export type RequireAsteriskPrefixRuleConfig =
  RuleConfig<RequireAsteriskPrefixOptions>;

/**
 * Requires that each JSDoc line starts with an `*`.
 *
 * @see [require-asterisk-prefix](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header)
 */
export interface RequireAsteriskPrefixRule {
  /**
   * Requires that each JSDoc line starts with an `*`.
   *
   * @see [require-asterisk-prefix](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header)
   */
  'jsdoc/require-asterisk-prefix': RequireAsteriskPrefixRuleConfig;
}
