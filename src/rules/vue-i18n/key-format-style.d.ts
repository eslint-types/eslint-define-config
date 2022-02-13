import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface KeyFormatStyleConfig {
  allowArray?: boolean;
  splitByDots?: boolean;
}

/**
 * Option.
 */
export type KeyFormatStyleOption =
  | 'camelCase'
  | 'kebab-case'
  | 'snake_case'
  | 'SCREAMING_SNAKE_CASE';

/**
 * Options.
 */
export type KeyFormatStyleOptions = [
  KeyFormatStyleOption?,
  KeyFormatStyleConfig?,
];

/**
 * Enforce specific casing for localization keys.
 *
 * @see [key-format-style](https://eslint-plugin-vue-i18n.intlify.dev/rules/key-format-style.html)
 */
export type KeyFormatStyleRuleConfig = RuleConfig<KeyFormatStyleOptions>;

/**
 * Enforce specific casing for localization keys.
 *
 * @see [key-format-style](https://eslint-plugin-vue-i18n.intlify.dev/rules/key-format-style.html)
 */
export interface KeyFormatStyleRule {
  /**
   * Enforce specific casing for localization keys.
   *
   * @see [key-format-style](https://eslint-plugin-vue-i18n.intlify.dev/rules/key-format-style.html)
   */
  '@intlify/vue-i18n/key-format-style': KeyFormatStyleRuleConfig;
}
