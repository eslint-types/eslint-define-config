import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type RequireAsteriskPrefixConfig = {
  tags?: Record<string, any>;
};

/**
 * Option.
 */
export type RequireAsteriskPrefixOption = 'always' | 'never' | 'any';

/**
 * Options.
 */
export type RequireAsteriskPrefixOptions = [RequireAsteriskPrefixOption?, RequireAsteriskPrefixConfig?];

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
