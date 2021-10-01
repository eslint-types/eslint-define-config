import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ValidVSlotOption {
  allowModifiers?: boolean;
}

/**
 * Options.
 */
export type ValidVSlotOptions = [ValidVSlotOption?];

/**
 * Enforce valid `v-slot` directives.
 *
 * @see [valid-v-slot](https://eslint.vuejs.org/rules/valid-v-slot.html)
 */
export type ValidVSlotRuleConfig = RuleConfig<ValidVSlotOptions>;

/**
 * Enforce valid `v-slot` directives.
 *
 * @see [valid-v-slot](https://eslint.vuejs.org/rules/valid-v-slot.html)
 */
export interface ValidVSlotRule {
  /**
   * Enforce valid `v-slot` directives.
   *
   * @see [valid-v-slot](https://eslint.vuejs.org/rules/valid-v-slot.html)
   */
  'vue/valid-v-slot': ValidVSlotRuleConfig;
}
