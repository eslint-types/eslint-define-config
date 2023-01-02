import type { RuleConfig } from '../rule-config';

/**
 * Disallow useless array length check.
 *
 * @see [no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-useless-length-check.md)
 */
export type NoUselessLengthCheckRuleConfig = RuleConfig<[]>;

/**
 * Disallow useless array length check.
 *
 * @see [no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-useless-length-check.md)
 */
export interface NoUselessLengthCheckRule {
  /**
   * Disallow useless array length check.
   *
   * @see [no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-useless-length-check.md)
   */
  'unicorn/no-useless-length-check': NoUselessLengthCheckRuleConfig;
}
