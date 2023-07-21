import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface KeyNameCasingOption {
  camelCase?: boolean;
  PascalCase?: boolean;
  SCREAMING_SNAKE_CASE?: boolean;
  'kebab-case'?: boolean;
  snake_case?: boolean;
  ignores?: string[];
}

/**
 * Options.
 */
export type KeyNameCasingOptions = [KeyNameCasingOption?];

/**
 * Enforce naming convention to key names.
 *
 * @see [key-name-casing](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html)
 */
export type KeyNameCasingRuleConfig = RuleConfig<KeyNameCasingOptions>;

/**
 * Enforce naming convention to key names.
 *
 * @see [key-name-casing](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html)
 */
export interface KeyNameCasingRule {
  /**
   * Enforce naming convention to key names.
   *
   * @see [key-name-casing](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html)
   */
  'yml/key-name-casing': KeyNameCasingRuleConfig;
}
