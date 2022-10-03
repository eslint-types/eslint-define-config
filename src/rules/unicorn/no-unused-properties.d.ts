import type { RuleConfig } from '../rule-config';

/**
 * Disallow unused object properties.
 *
 * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/no-unused-properties.md)
 */
export type NoUnusedPropertiesRuleConfig = RuleConfig<[]>;

/**
 * Disallow unused object properties.
 *
 * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/no-unused-properties.md)
 */
export interface NoUnusedPropertiesRule {
  /**
   * Disallow unused object properties.
   *
   * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/no-unused-properties.md)
   */
  'unicorn/no-unused-properties': NoUnusedPropertiesRuleConfig;
}
