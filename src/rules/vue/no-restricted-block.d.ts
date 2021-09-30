import type { RuleConfig } from '../rule-config';

/**
 * Disallow specific block
 *
 * @see [no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html)
 */
export type NoRestrictedBlockRuleConfig = RuleConfig<[]>;

/**
 * Disallow specific block
 *
 * @see [no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html)
 */
export interface NoRestrictedBlockRule {
  /**
   * Disallow specific block
   *
   * @see [no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html)
   */
  'vue/no-restricted-block': NoRestrictedBlockRuleConfig;
}
