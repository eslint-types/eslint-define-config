import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUselessMustachesOption {
  ignoreIncludesComment?: boolean;
  ignoreStringEscape?: boolean;
}

/**
 * Options.
 */
export type NoUselessMustachesOptions = [NoUselessMustachesOption?];

/**
 * Disallow unnecessary mustache interpolations.
 *
 * @see [no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html)
 */
export type NoUselessMustachesRuleConfig =
  RuleConfig<NoUselessMustachesOptions>;

/**
 * Disallow unnecessary mustache interpolations.
 *
 * @see [no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html)
 */
export interface NoUselessMustachesRule {
  /**
   * Disallow unnecessary mustache interpolations.
   *
   * @see [no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html)
   */
  'vue/no-useless-mustaches': NoUselessMustachesRuleConfig;
}
