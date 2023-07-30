import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoTypeofUndefinedOption {
  checkGlobalVariables?: boolean;
}

/**
 * Options.
 */
export type NoTypeofUndefinedOptions = [NoTypeofUndefinedOption?];

/**
 * Disallow comparing `undefined` using `typeof`.
 *
 * @see [no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-typeof-undefined.md)
 */
export type NoTypeofUndefinedRuleConfig = RuleConfig<NoTypeofUndefinedOptions>;

/**
 * Disallow comparing `undefined` using `typeof`.
 *
 * @see [no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-typeof-undefined.md)
 */
export interface NoTypeofUndefinedRule {
  /**
   * Disallow comparing `undefined` using `typeof`.
   *
   * @see [no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-typeof-undefined.md)
   */
  'unicorn/no-typeof-undefined': NoTypeofUndefinedRuleConfig;
}
