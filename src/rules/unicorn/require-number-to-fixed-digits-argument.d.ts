import type { RuleConfig } from '../rule-config';

/**
 * Enforce using the digits argument with `Number#toFixed()`.
 *
 * @see [require-number-to-fixed-digits-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/require-number-to-fixed-digits-argument.md)
 */
export type RequireNumberToFixedDigitsArgumentRuleConfig = RuleConfig<[]>;

/**
 * Enforce using the digits argument with `Number#toFixed()`.
 *
 * @see [require-number-to-fixed-digits-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/require-number-to-fixed-digits-argument.md)
 */
export interface RequireNumberToFixedDigitsArgumentRule {
  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   *
   * @see [require-number-to-fixed-digits-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/require-number-to-fixed-digits-argument.md)
   */
  'unicorn/require-number-to-fixed-digits-argument': RequireNumberToFixedDigitsArgumentRuleConfig;
}
