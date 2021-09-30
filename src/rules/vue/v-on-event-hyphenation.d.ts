import type { RuleConfig } from '../rule-config';

/**
 * enforce v-on event naming style on custom components in template
 *
 * @see [v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
 */
export type VOnEventHyphenationRuleConfig = RuleConfig<[]>;

/**
 * enforce v-on event naming style on custom components in template
 *
 * @see [v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
 */
export interface VOnEventHyphenationRule {
  /**
   * enforce v-on event naming style on custom components in template
   *
   * @see [v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
   */
  'vue/v-on-event-hyphenation': VOnEventHyphenationRuleConfig;
}
