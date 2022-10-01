import type { RuleConfig } from '../rule-config';

/**
 * Disallow BigInt literals.
 *
 * @see [no-bigint-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html)
 */
export type NoBigintLiteralsRuleConfig = RuleConfig<[]>;

/**
 * Disallow BigInt literals.
 *
 * @see [no-bigint-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html)
 */
export interface NoBigintLiteralsRule {
  /**
   * Disallow BigInt literals.
   *
   * @see [no-bigint-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html)
   */
  'jsonc/no-bigint-literals': NoBigintLiteralsRuleConfig;
}
