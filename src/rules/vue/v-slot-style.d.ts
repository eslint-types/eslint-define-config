import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type VSlotStyleOption =
  | ('shorthand' | 'longform')
  | {
      atComponent?: 'shorthand' | 'longform' | 'v-slot';
      default?: 'shorthand' | 'longform' | 'v-slot';
      named?: 'shorthand' | 'longform';
    };

/**
 * Options.
 */
export type VSlotStyleOptions = [VSlotStyleOption?];

/**
 * Enforce `v-slot` directive style.
 *
 * @see [v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html)
 */
export type VSlotStyleRuleConfig = RuleConfig<VSlotStyleOptions>;

/**
 * Enforce `v-slot` directive style.
 *
 * @see [v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html)
 */
export interface VSlotStyleRule {
  /**
   * Enforce `v-slot` directive style.
   *
   * @see [v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html)
   */
  'vue/v-slot-style': VSlotStyleRuleConfig;
}
