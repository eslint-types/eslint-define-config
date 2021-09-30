import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUselessMustachesOption = {
  /**
   * @see [no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html)
   */
  ignoreIncludesComment?: any;

  /**
   * @see [no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html)
   */
  ignoreStringEscape?: any;
};

/**
 * Options.
 */
export type NoUselessMustachesOptions = [NoUselessMustachesOption?];

/**
 * disallow unnecessary mustache interpolations
 *
 * @see [no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html)
 */
export type NoUselessMustachesRuleConfig = RuleConfig<NoUselessMustachesOptions>;

/**
 * disallow unnecessary mustache interpolations
 *
 * @see [no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html)
 */
export interface NoUselessMustachesRule {
  /**
   * disallow unnecessary mustache interpolations
   *
   * @see [no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html)
   */
  'vue/no-useless-mustaches': NoUselessMustachesRuleConfig;
}
