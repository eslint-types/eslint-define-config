import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface KeyFormatStyleConfig {
  allowArray?: boolean;
}

/**
 * Option.
 */
export type KeyFormatStyleOption = 'camelCase' | 'kebab-case' | 'snake_case' | 'SCREAMING_SNAKE_CASE';

/**
 * Options.
 */
export type KeyFormatStyleOptions = [KeyFormatStyleOption?, KeyFormatStyleConfig?];

/**
 * Enforce specific casing for localization keys.
 *
 *
 */
export type KeyFormatStyleRuleConfig = RuleConfig<KeyFormatStyleOptions>;

/**
 * Enforce specific casing for localization keys.
 *
 *
 */
export interface KeyFormatStyleRule {
  /**
   * Enforce specific casing for localization keys.
   *
   *
   */
  '@intlify/vue-i18n/key-format-style': KeyFormatStyleRuleConfig;
}
