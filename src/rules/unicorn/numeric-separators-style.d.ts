import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NumericSeparatorsStyleOption {
  binary?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  octal?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  hexadecimal?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  number?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  onlyIfContainsSeparator?: boolean;
}

/**
 * Options.
 */
export type NumericSeparatorsStyleOptions = [NumericSeparatorsStyleOption?];

/**
 * Enforce the style of numeric separators by correctly grouping digits.
 *
 * @see [numeric-separators-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/numeric-separators-style.md)
 */
export type NumericSeparatorsStyleRuleConfig =
  RuleConfig<NumericSeparatorsStyleOptions>;

/**
 * Enforce the style of numeric separators by correctly grouping digits.
 *
 * @see [numeric-separators-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/numeric-separators-style.md)
 */
export interface NumericSeparatorsStyleRule {
  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   *
   * @see [numeric-separators-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/numeric-separators-style.md)
   */
  'unicorn/numeric-separators-style': NumericSeparatorsStyleRuleConfig;
}
