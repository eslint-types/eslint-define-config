import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ValidVOnOption = {
  /**
   * @see [valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)
   */
  modifiers?: any;
};

/**
 * Options.
 */
export type ValidVOnOptions = [ValidVOnOption?];

/**
 * enforce valid `v-on` directives
 *
 * @see [valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)
 */
export type ValidVOnRuleConfig = RuleConfig<ValidVOnOptions>;

/**
 * enforce valid `v-on` directives
 *
 * @see [valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)
 */
export interface ValidVOnRule {
  /**
   * enforce valid `v-on` directives
   *
   * @see [valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)
   */
  'vue/valid-v-on': ValidVOnRuleConfig;
}
