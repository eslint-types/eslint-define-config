import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface RequireAsteriskPrefixConfig {
  tags?: {
    always?: string[];
    any?: string[];
    never?: string[];
    [k: string]: any;
  };
}

/**
 * Option.
 */
export type RequireAsteriskPrefixOption = 'always' | 'never' | 'any';

/**
 * Options.
 */
export type RequireAsteriskPrefixOptions = [
  RequireAsteriskPrefixOption?,
  RequireAsteriskPrefixConfig?,
];

/**
 *
 */
export type RequireAsteriskPrefixRuleConfig =
  RuleConfig<RequireAsteriskPrefixOptions>;

/**
 *
 */
export interface RequireAsteriskPrefixRule {
  /**
   *
   */
  'jsdoc/require-asterisk-prefix': RequireAsteriskPrefixRuleConfig;
}
