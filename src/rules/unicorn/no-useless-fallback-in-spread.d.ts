import type { RuleConfig } from '../rule-config';

/**
 * Disallow useless fallback when spreading in object literals.
 *
 * @see [no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-useless-fallback-in-spread.md)
 */
export type NoUselessFallbackInSpreadRuleConfig = RuleConfig<[]>;

/**
 * Disallow useless fallback when spreading in object literals.
 *
 * @see [no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-useless-fallback-in-spread.md)
 */
export interface NoUselessFallbackInSpreadRule {
  /**
   * Disallow useless fallback when spreading in object literals.
   *
   * @see [no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-useless-fallback-in-spread.md)
   */
  'unicorn/no-useless-fallback-in-spread': NoUselessFallbackInSpreadRuleConfig;
}
