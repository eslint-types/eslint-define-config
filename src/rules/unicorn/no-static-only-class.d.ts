import type { RuleConfig } from '../rule-config';

/**
 * Disallow classes that only have static members.
 *
 * @see [no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-static-only-class.md)
 */
export type NoStaticOnlyClassRuleConfig = RuleConfig<[]>;

/**
 * Disallow classes that only have static members.
 *
 * @see [no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-static-only-class.md)
 */
export interface NoStaticOnlyClassRule {
  /**
   * Disallow classes that only have static members.
   *
   * @see [no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-static-only-class.md)
   */
  'unicorn/no-static-only-class': NoStaticOnlyClassRuleConfig;
}
