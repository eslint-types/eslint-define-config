import type { RuleConfig } from '../rule-config';

/**
 * disallow use other than available `lang`
 *
 * @see [block-lang](https://eslint.vuejs.org/rules/block-lang.html)
 */
export type BlockLangRuleConfig = RuleConfig<[]>;

/**
 * disallow use other than available `lang`
 *
 * @see [block-lang](https://eslint.vuejs.org/rules/block-lang.html)
 */
export interface BlockLangRule {
  /**
   * disallow use other than available `lang`
   *
   * @see [block-lang](https://eslint.vuejs.org/rules/block-lang.html)
   */
  'vue/block-lang': BlockLangRuleConfig;
}
