import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type ValidVCloakRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface ValidVCloakRule {
  /**
   *
   */
  'vue/valid-v-cloak': ValidVCloakRuleConfig;
}
