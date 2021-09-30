import type { RuleConfig } from '../rule-config';

/**
 * disallow to pass multiple arguments to scoped slots
 *
 * @see [no-multiple-slot-args](https://eslint.vuejs.org/rules/no-multiple-slot-args.html)
 */
export type NoMultipleSlotArgsRuleConfig = RuleConfig<[]>;

/**
 * disallow to pass multiple arguments to scoped slots
 *
 * @see [no-multiple-slot-args](https://eslint.vuejs.org/rules/no-multiple-slot-args.html)
 */
export interface NoMultipleSlotArgsRule {
  /**
   * disallow to pass multiple arguments to scoped slots
   *
   * @see [no-multiple-slot-args](https://eslint.vuejs.org/rules/no-multiple-slot-args.html)
   */
  'vue/no-multiple-slot-args': NoMultipleSlotArgsRuleConfig;
}
