import type { RuleConfig } from '../rule-config';

/**
 * Enforce v-on event naming style on custom components in template
 *
 * @see [v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
 */
export type VOnEventHyphenationRuleConfig = RuleConfig<[]>;

/**
 * Enforce v-on event naming style on custom components in template
 *
 * @see [v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
 */
export interface VOnEventHyphenationRule {
  /**
   * Enforce v-on event naming style on custom components in template
   *
   * @see [v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
   */
  'vue/v-on-event-hyphenation': VOnEventHyphenationRuleConfig;
}
