import type { RuleConfig } from '../rule-config';

/**
 * enforce `v-slot` directive style
 *
 * @see [v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html)
 */
export type VSlotStyleRuleConfig = RuleConfig<[]>;

/**
 * enforce `v-slot` directive style
 *
 * @see [v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html)
 */
export interface VSlotStyleRule {
  /**
   * enforce `v-slot` directive style
   *
   * @see [v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html)
   */
  'vue/v-slot-style': VSlotStyleRuleConfig;
}
