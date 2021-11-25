import type { RuleConfig } from '../rule-config';

/**
 * Forbid classes that only have static members.
 *
 * @see [no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-static-only-class.md)
 */
export type NoStaticOnlyClassRuleConfig = RuleConfig<[]>;

/**
 * Forbid classes that only have static members.
 *
 * @see [no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-static-only-class.md)
 */
export interface NoStaticOnlyClassRule {
  /**
   * Forbid classes that only have static members.
   *
   * @see [no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-static-only-class.md)
   */
  'unicorn/no-static-only-class': NoStaticOnlyClassRuleConfig;
}
