import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface BlockLangOption {
  /**
   */
  [k: string]: {
    lang?: string | string[];
    allowNoLang?: boolean;
  };
}

/**
 * Options.
 */
export type BlockLangOptions = [BlockLangOption?];

/**
 * Disallow use other than available `lang`.
 *
 * @see [block-lang](https://eslint.vuejs.org/rules/block-lang.html)
 */
export type BlockLangRuleConfig = RuleConfig<BlockLangOptions>;

/**
 * Disallow use other than available `lang`.
 *
 * @see [block-lang](https://eslint.vuejs.org/rules/block-lang.html)
 */
export interface BlockLangRule {
  /**
   * Disallow use other than available `lang`.
   *
   * @see [block-lang](https://eslint.vuejs.org/rules/block-lang.html)
   */
  'vue/block-lang': BlockLangRuleConfig;
}
