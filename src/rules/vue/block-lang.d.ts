import type { RuleConfig } from '../rule-config';

/**
 * Disallow use other than available `lang`
 *
 * @see [block-lang](https://eslint.vuejs.org/rules/block-lang.html)
 */
export type BlockLangRuleConfig = RuleConfig<[]>;

/**
 * Disallow use other than available `lang`
 *
 * @see [block-lang](https://eslint.vuejs.org/rules/block-lang.html)
 */
export interface BlockLangRule {
  /**
   * Disallow use other than available `lang`
   *
   * @see [block-lang](https://eslint.vuejs.org/rules/block-lang.html)
   */
  'vue/block-lang': BlockLangRuleConfig;
}
