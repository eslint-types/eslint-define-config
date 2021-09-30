import type { RuleConfig } from '../rule-config';

/**
 * disallow specific block
 *
 * @see [no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html)
 */
export type NoRestrictedBlockRuleConfig = RuleConfig<[]>;

/**
 * disallow specific block
 *
 * @see [no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html)
 */
export interface NoRestrictedBlockRule {
  /**
   * disallow specific block
   *
   * @see [no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html)
   */
  'vue/no-restricted-block': NoRestrictedBlockRuleConfig;
}
