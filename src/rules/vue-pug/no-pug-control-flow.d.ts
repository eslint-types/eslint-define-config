import type { RuleConfig } from '../rule-config';

/**
 * Disallow pug control flow features.
 *
 * @see [no-pug-control-flow](https://eslint-plugin-vue-pug.rash.codes/rules/no-pug-control-flow.html)
 */
export type NoPugControlFlowRuleConfig = RuleConfig<[]>;

/**
 * Disallow pug control flow features.
 *
 * @see [no-pug-control-flow](https://eslint-plugin-vue-pug.rash.codes/rules/no-pug-control-flow.html)
 */
export interface NoPugControlFlowRule {
  /**
   * Disallow pug control flow features.
   *
   * @see [no-pug-control-flow](https://eslint-plugin-vue-pug.rash.codes/rules/no-pug-control-flow.html)
   */
  'vue-pug/no-pug-control-flow': NoPugControlFlowRuleConfig;
}
