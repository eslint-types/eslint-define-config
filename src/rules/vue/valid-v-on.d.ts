import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ValidVOnOption {
  modifiers?: any[];
}

/**
 * Options.
 */
export type ValidVOnOptions = [ValidVOnOption?];

/**
 * Enforce valid `v-on` directives.
 *
 * @see [valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)
 */
export type ValidVOnRuleConfig = RuleConfig<ValidVOnOptions>;

/**
 * Enforce valid `v-on` directives.
 *
 * @see [valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)
 */
export interface ValidVOnRule {
  /**
   * Enforce valid `v-on` directives.
   *
   * @see [valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)
   */
  'vue/valid-v-on': ValidVOnRuleConfig;
}
