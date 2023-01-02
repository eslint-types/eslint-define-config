import type { RuleConfig } from '../rule-config';

/**
 * Disallow unused object properties.
 *
 * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-unused-properties.md)
 */
export type NoUnusedPropertiesRuleConfig = RuleConfig<[]>;

/**
 * Disallow unused object properties.
 *
 * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-unused-properties.md)
 */
export interface NoUnusedPropertiesRule {
  /**
   * Disallow unused object properties.
   *
   * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-unused-properties.md)
   */
  'unicorn/no-unused-properties': NoUnusedPropertiesRuleConfig;
}
