import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoVModelArgumentRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoVModelArgumentRule {
  /**
   *
   */
  'vue/no-v-model-argument': NoVModelArgumentRuleConfig;
}
