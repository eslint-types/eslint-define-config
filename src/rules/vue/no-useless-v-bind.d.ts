import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUselessVBindOption = {
  /**
   * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
   */
  ignoreIncludesComment?: any;

  /**
   * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
   */
  ignoreStringEscape?: any;
};

/**
 * Options.
 */
export type NoUselessVBindOptions = [NoUselessVBindOption?];

/**
 * disallow unnecessary `v-bind` directives
 *
 * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
 */
export type NoUselessVBindRuleConfig = RuleConfig<NoUselessVBindOptions>;

/**
 * disallow unnecessary `v-bind` directives
 *
 * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
 */
export interface NoUselessVBindRule {
  /**
   * disallow unnecessary `v-bind` directives
   *
   * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
   */
  'vue/no-useless-v-bind': NoUselessVBindRuleConfig;
}
