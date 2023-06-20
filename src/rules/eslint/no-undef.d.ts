import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUndefOption {
  typeof?: boolean;
}

/**
 * Options.
 */
export type NoUndefOptions = [NoUndefOption?];

/**
 * Disallow the use of undeclared variables unless mentioned in `/*global ` comments.
 *
 * @see [no-undef](https://eslint.org/docs/latest/rules/no-undef)
 */
export type NoUndefRuleConfig = RuleConfig<NoUndefOptions>;

/**
 * Disallow the use of undeclared variables unless mentioned in `/*global ` comments.
 *
 * @see [no-undef](https://eslint.org/docs/latest/rules/no-undef)
 */
export interface NoUndefRule {
  /**
   * Disallow the use of undeclared variables unless mentioned in `/*global ` comments.
   *
   * @see [no-undef](https://eslint.org/docs/latest/rules/no-undef)
   */
  'no-undef': NoUndefRuleConfig;
}
