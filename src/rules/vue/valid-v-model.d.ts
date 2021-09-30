import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type ValidVModelRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface ValidVModelRule {
  /**
   *
   */
  'vue/valid-v-model': ValidVModelRuleConfig;
}
