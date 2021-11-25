import type { RuleConfig } from '../rule-config';

/**
 * Forbid useless fallback when spreading in object literals.
 *
 * @see [no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-useless-fallback-in-spread.md)
 */
export type NoUselessFallbackInSpreadRuleConfig = RuleConfig<[]>;

/**
 * Forbid useless fallback when spreading in object literals.
 *
 * @see [no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-useless-fallback-in-spread.md)
 */
export interface NoUselessFallbackInSpreadRule {
  /**
   * Forbid useless fallback when spreading in object literals.
   *
   * @see [no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/no-useless-fallback-in-spread.md)
   */
  'unicorn/no-useless-fallback-in-spread': NoUselessFallbackInSpreadRuleConfig;
}
