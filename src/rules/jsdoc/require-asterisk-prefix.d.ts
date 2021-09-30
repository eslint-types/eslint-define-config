import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireAsteriskPrefixOption = 'always' | 'never' | 'any';

/**
 * Options.
 */
export type RequireAsteriskPrefixOptions = [RequireAsteriskPrefixOption?];

/**
 *
 *
 *
 */
export type RequireAsteriskPrefixRuleConfig = RuleConfig<RequireAsteriskPrefixOptions>;

/**
 *
 *
 *
 */
export interface RequireAsteriskPrefixRule {
  /**
   *
   *
   *
   */
  'jsdoc/require-asterisk-prefix': RequireAsteriskPrefixRuleConfig;
}
