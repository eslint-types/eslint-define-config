import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface VOnEventHyphenationConfig {
  autofix?: boolean;
  ignore?: string[];
}

/**
 * Option.
 */
export type VOnEventHyphenationOption = 'always' | 'never';

/**
 * Options.
 */
export type VOnEventHyphenationOptions = [
  VOnEventHyphenationOption?,
  VOnEventHyphenationConfig?,
];

/**
 * Enforce v-on event naming style on custom components in template.
 *
 * @see [v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
 */
export type VOnEventHyphenationRuleConfig =
  RuleConfig<VOnEventHyphenationOptions>;

/**
 * Enforce v-on event naming style on custom components in template.
 *
 * @see [v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
 */
export interface VOnEventHyphenationRule {
  /**
   * Enforce v-on event naming style on custom components in template.
   *
   * @see [v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
   */
  'vue/v-on-event-hyphenation': VOnEventHyphenationRuleConfig;
}
