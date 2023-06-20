import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ValidTypeofOption {
  requireStringLiterals?: boolean;
}

/**
 * Options.
 */
export type ValidTypeofOptions = [ValidTypeofOption?];

/**
 * Enforce comparing `typeof` expressions against valid strings.
 *
 * @see [valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof)
 */
export type ValidTypeofRuleConfig = RuleConfig<ValidTypeofOptions>;

/**
 * Enforce comparing `typeof` expressions against valid strings.
 *
 * @see [valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof)
 */
export interface ValidTypeofRule {
  /**
   * Enforce comparing `typeof` expressions against valid strings.
   *
   * @see [valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof)
   */
  'valid-typeof': ValidTypeofRuleConfig;
}
